const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const db = require('../config/database');

const Functions = {
    redirect: (res, url) => {
        res.redirect(url);
    },

    generateCSRFToken: (req) => {
        if (!req.session.csrf_token) {
            req.session.csrf_token = crypto.randomBytes(32).toString('hex');
        }
        return req.session.csrf_token;
    },

    validateCSRFToken: (req, token) => {
        return token && req.session.csrf_token === token;
    },

    sanitize: (input) => {
        if (typeof input === 'string') {
            return input.replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#039;');
        }
        return input;
    },

    verifyPassword: async (password, hash) => {
        return await bcrypt.compare(password, hash);
    },

    hashPassword: async (password) => {
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(password, salt);
    },

    validateEmail: (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    },

    generateStudentID: () => {
        const year = new Date().getFullYear();
        const rand = Math.floor(1000 + Math.random() * 9000);
        return `RLI-${year}-${rand}`;
    },

    logActivity: async (userId, userType, activity) => {
        try {
            await db.execute('INSERT INTO activity_logs (user_id, user_type, activity, created_at) VALUES (?, ?, ?, NOW())', [userId, userType, activity]);
        } catch (error) {
            console.error('Logging Error:', error);
        }
    },

    sendEmail: async (to, subject, message) => {
        // Implementation for sending email (using nodemailer or verified service in production)
        console.log(`[MOCK EMAIL] To: ${to}, Subject: ${subject}`);
        console.log(`Message: ${message}`);
        return true;
    }
};

module.exports = Functions;
