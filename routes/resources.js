const express = require('express');
const router = express.Router();
const db = require('../config/database');
const path = require('path');

// Middleware
const isStudent = (req, res, next) => {
    if (req.session.user && req.session.user.role === 'student') {
        next();
    } else {
        res.redirect('/login');
    }
};

router.use(isStudent);

router.get('/', async (req, res) => {
    try {
        const category = req.query.category || '';
        const search = req.query.search || '';
        const page = parseInt(req.query.page) || 1;
        const limit = 10;
        const offset = (page - 1) * limit;

        // Mock Data
        let resources = [
            { id: 1, title: "Human Anatomy Basics", category: "anatomy", description: "Introduction to human body structure.", file_path: "anatomy_101.pdf", file_size: 2500000, downloads: 120, created_at: new Date('2023-01-15') },
            { id: 2, title: "Hematology Lab Manual", category: "hematology", description: "Standard operating procedures for blood tests.", file_path: "hema_lab.pdf", file_size: 5600000, downloads: 85, created_at: new Date('2023-02-20') },
            { id: 3, title: "Microbiology Notes", category: "microbiology", description: "Class notes for Microbiology 101.", file_path: "micro_notes.pdf", file_size: 1200000, downloads: 200, created_at: new Date('2023-03-10') }
        ];

        // Filter Mock Data
        if (category) {
            resources = resources.filter(r => r.category === category);
        }
        if (search) {
            const lowerSearch = search.toLowerCase();
            resources = resources.filter(r => r.title.toLowerCase().includes(lowerSearch) || r.description.toLowerCase().includes(lowerSearch));
        }

        const total_records = resources.length;
        const total_pages = Math.ceil(total_records / limit);
        const paginatedResources = resources.slice(offset, offset + limit);

        const categories = [
            { category: 'anatomy' },
            { category: 'hematology' },
            { category: 'microbiology' },
            { category: 'biochemistry' }
        ];

        res.render('resources', {
            pageTitle: "Study Resources",
            resources: paginatedResources,
            categories: categories,
            page: page,
            total_pages: total_pages,
            category: category,
            search: search,
            student: req.session.user
        });
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
});

router.get('/download/:id', (req, res) => {
    // Mock Download
    const id = req.params.id;
    // In real app: locate file, increment download count in DB, verify access
    // For now, redirect back with message or send a dummy text file
    res.set('Content-Type', 'text/plain');
    res.set('Content-Disposition', `attachment; filename="resource_${id}.txt"`);
    res.send(`This is a dummy content for resource ${id}. In a real app, this would be the actual file.`);
});

module.exports = router;
