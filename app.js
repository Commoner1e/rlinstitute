const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const dotenv = require('dotenv');

const helmet = require('helmet');
const { body, validationResult } = require('express-validator');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet({
    contentSecurityPolicy: false, // Disabled for simplicity with inline scripts/styles in EJS
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Session Setup
app.use(session({
    secret: process.env.SESSION_SECRET || 'rlinstitute_secret_key',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: process.env.NODE_ENV === 'production',
        maxAge: 1000 * 60 * 60 * 2 // 2 hours
    }
}));

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Global Middleware for User Session in Views
app.use((req, res, next) => {
    res.locals.user = req.session.user || null;
    res.locals.isStudentLoggedIn = req.session.user && req.session.user.role === 'student';
    res.locals.isAdminLoggedIn = req.session.user && req.session.user.role === 'admin';
    next();
});

// Routes Import
const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');
const dashboardRouter = require('./routes/dashboard');
const resourcesRouter = require('./routes/resources');
const profileRouter = require('./routes/profile');

// Routes Mount
app.use('/', indexRouter);
app.use('/', authRouter); // login, register, logout
app.use('/dashboard', dashboardRouter);
app.use('/resources', resourcesRouter);
app.use('/profile', profileRouter);

// 404 Handler
app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found', error: 'Page not found' });
});

// Error Handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
