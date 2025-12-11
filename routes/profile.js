const express = require('express');
const router = express.Router();
const db = require('../config/database');

// Middleware
const isStudent = (req, res, next) => {
    if (req.session.user && req.session.user.role === 'student') {
        next();
    } else {
        res.redirect('/login');
    }
};

router.use(isStudent);

router.get('/', (req, res) => {
    res.render('profile', {
        pageTitle: "My Profile",
        student: req.session.user
    });
});

router.post('/update', (req, res) => {
    // Mock Update
    // const { first_name, last_name, ... } = req.body;
    // await db.execute(...)

    // Update session
    // req.session.user.name = ...

    res.redirect('/profile?success=Profile updated successfully');
});

module.exports = router;
