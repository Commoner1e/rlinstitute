const express = require('express');
const router = express.Router();
const Functions = require('../utils/functions');

router.get('/', (req, res) => {
    res.render('index', {
        pageTitle: "R-L Technical Institute - Medical Lab Technician Training",
        Functions: Functions // Pass helper functions to view if needed
    });
});

module.exports = router;
