import express from "express";
import dotenv from "dotenv";
import jwt from 'jsonwebtoken';
import { MongoClient, ObjectId } from 'mongodb';
import bcrypt from 'bcrypt';
import cors from 'cors';
import bodyParser from 'body-parser';

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

let db;

const connectToMongoDB = async () => {
  try {
    const uri = process.env.MONGODB_URI;
    const client = new MongoClient(uri);
    await client.connect();
    db = client.db('RLTInstitute');
    console.log('Connected to MongoDB - Database: RLTInstitute');
    
    // Create indexes for better performance
    await db.collection('users').createIndex({ email: 1 }, { unique: true });
    await db.collection('users').createIndex({ phone: 1 }, { unique: true });
    
    console.log('Database indexes created');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

connectToMongoDB();

// Generate JWT Token
const generateToken = (user, remember) => {
  return jwt.sign(
    { 
      id: user._id.toString(), 
      email: user.email,
      fullName: user.fullName,
      role: user.role || 'student'
    },
    process.env.JWT_SECRET || 'your-secret-key-change-in-production',
    { expiresIn: remember ? '7d' : '24h' }
  );
};

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key-change-in-production', (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid or expired token' });
    }
    req.user = user;
    next();
  });
};

// Registration endpoint
app.post('/api/register', async (req, res) => {
  try {
    const {
      fullName,
      gender,
      dob,
      email,
      phone,
      password,
      confirmPassword,
      acceptTerms
    } = req.body;

    // Validation
    if (!fullName || !email || !phone || !password || !confirmPassword) {
      return res.status(400).json({ error: 'All required fields must be filled' });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ error: 'Passwords do not match' });
    }

    if (!acceptTerms) {
      return res.status(400).json({ error: 'You must accept the terms and conditions' });
    }

    // Check if user already exists
    const existingUser = await db.collection('users').findOne({
      $or: [{ email }, { phone }]
    });

    if (existingUser) {
      if (existingUser.email === email) {
        return res.status(400).json({ error: 'Email already registered' });
      }
      if (existingUser.phone === phone) {
        return res.status(400).json({ error: 'Phone number already registered' });
      }
    }

    // Hash password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create user object
    const user = {
      fullName,
      gender,
      dob: new Date(dob),
      email,
      phone,
      password: hashedPassword,
      role: 'student',
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date(),
      lastLogin: null,
      profileImage: null,
      address: null,
      coursesEnrolled: []
    };

    // Insert into database
    const result = await db.collection('users').insertOne(user);

    // Generate token
    const token = generateToken({ ...user, _id: result.insertedId }, false);

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user;

    res.status(201).json({
      message: 'Registration successful!',
      user: { ...userWithoutPassword, _id: result.insertedId },
      token
    });

  } catch (error) {
    console.error('Registration error:', error);
    
    if (error.code === 11000) {
      return res.status(400).json({ error: 'Email or phone number already exists' });
    }
    
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Login endpoint
app.post('/api/login', async (req, res) => {
  try {
    const { email, password, rememberMe = false } = req.body;

    // Validation
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    // Find user
    const user = await db.collection('users').findOne({ email });

    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Update last login
    await db.collection('users').updateOne(
      { _id: user._id },
      { $set: { lastLogin: new Date() } }
    );

    // Generate token
    const token = generateToken(user, rememberMe);

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user;

    res.json({
      message: 'Login successful!',
      user: userWithoutPassword,
      token
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get user profile (protected route)
app.get('/api/profile', authenticateToken, async (req, res) => {
  try {
    const user = await db.collection('users').findOne(
      { _id: new ObjectId(req.user.id) },
      { projection: { password: 0 } }
    );

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ user });
  } catch (error) {
    console.error('Profile error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update user profile (protected route)
app.put('/api/profile', authenticateToken, async (req, res) => {
  try {
    const updates = req.body;
    delete updates.password; // Don't allow password update here
    delete updates.email; // Don't allow email change

    await db.collection('users').updateOne(
      { _id: new ObjectId(req.user.id) },
      { $set: { ...updates, updatedAt: new Date() } }
    );

    res.json({ message: 'Profile updated successfully' });
  } catch (error) {
    console.error('Update profile error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Change password (protected route)
app.post('/api/change-password', authenticateToken, async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;

    // Get user with password
    const user = await db.collection('users').findOne(
      { _id: new ObjectId(req.user.id) }
    );

    // Verify current password
    const isPasswordValid = await bcrypt.compare(currentPassword, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Current password is incorrect' });
    }

    // Hash new password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(newPassword, saltRounds);

    // Update password
    await db.collection('users').updateOne(
      { _id: user._id },
      { $set: { password: hashedPassword, updatedAt: new Date() } }
    );

    res.json({ message: 'Password changed successfully' });
  } catch (error) {
    console.error('Change password error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Forgot password endpoint
app.post('/api/forgot-password', async (req, res) => {
  try {
    const { email } = req.body;

    const user = await db.collection('users').findOne({ email });

    if (!user) {
      // Don't reveal that user doesn't exist for security
      return res.json({ 
        message: 'If an account exists with this email, you will receive a password reset link' 
      });
    }
    res.json({ 
      message: 'If an account exists with this email, you will receive a password reset link' 
    });

  } catch (error) {
    console.error('Forgot password error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Reset password endpoint
app.post('/api/reset-password', async (req, res) => {
  try {
    const { token, newPassword } = req.body;
    res.json({ message: 'Password reset functionality will be implemented' });
  } catch (error) {
    console.error('Reset password error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    database: db ? 'connected' : 'disconnected',
    timestamp: new Date().toISOString()
  });
});

// Start server
const PORT = process.env.PORT || 2056;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});