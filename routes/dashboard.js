const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Functions = require('../utils/functions');

// Middleware to check if student is logged in
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
        const student = req.session.user; // In real app, might fetch fresh data from DB using student.id

        // Mock Data (Replace with DB calls)
        const announcements = [
            { title: "Exam Schedule Published", content: "The final exam schedule for 1st year has been published. Please check the notice board.", created_at: new Date() },
            { title: "Holiday Notice", content: "Institute will remain closed on the occasion of Dashain festival.", created_at: new Date(Date.now() - 86400000) }
        ];

        const events = [
            { title: "Blood Donation Camp", event_date: new Date(Date.now() + 86400000 * 5), event_time: "10:00:00", venue: "College Ground", event_type: "Social" },
            { title: "Guest Lecture: Hematology", event_date: new Date(Date.now() + 86400000 * 10), event_time: "11:00:00", venue: "Hall A", event_type: "Academic" }
        ];

        const recent_downloads = [
            { title: "Anatomy Notes - Chapter 1", downloaded_at: new Date() },
            { title: "Lab Manual 2023", downloaded_at: new Date(Date.now() - 3600000) }
        ];

        const download_count = 15;
        const total_resources = 120;

        // If DB connected:
        // const [announcements] = await db.execute("SELECT * FROM announcements WHERE is_active = 1 ORDER BY created_at DESC LIMIT 5");
        // const [events] = await db.execute("SELECT * FROM events WHERE is_active = 1 AND event_date >= CURDATE() ORDER BY event_date ASC LIMIT 5");

        // For student specific details if needed
        // const [studentData] = await db.execute("SELECT * FROM students WHERE id = ?", [student.id]);
        // const studentFull = studentData[0]; 

        // We pass 'student' object that closely matches what view expects. 
        // Our session student object might be minimal, so we mock the profile photo field if missing
        if (!student.pp_photo) student.pp_photo = 'default.png';
        if (!student.last_login) student.last_login = new Date();

        res.render('dashboard', {
            pageTitle: "Student Dashboard",
            student: student,
            announcements: announcements,
            events: events,
            recent_downloads: recent_downloads,
            download_count: download_count,
            total_resources: total_resources,
            SESSION_TIMEOUT: 1800 // 30 mins
        });
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
});

module.exports = router;
