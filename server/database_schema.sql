-- Database Schema for R-L Technical Institute

CREATE DATABASE IF NOT EXISTS rlinstitute;
USE rlinstitute;

-- Table: students
CREATE TABLE IF NOT EXISTS students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_id VARCHAR(20) UNIQUE NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    middle_name VARCHAR(50),
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(20) NOT NULL,
    address TEXT NOT NULL,
    dob DATE NOT NULL,
    gender ENUM('male', 'female', 'other') NOT NULL,
    guardian_name VARCHAR(100),
    guardian_phone VARCHAR(20),
    see_marksheet VARCHAR(255) NOT NULL,
    see_character VARCHAR(255) NOT NULL,
    pp_photo VARCHAR(255) NOT NULL,
    citizenship VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    status ENUM('pending', 'approved', 'rejected') DEFAULT 'pending',
    last_login DATETIME,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table: announcements
CREATE TABLE IF NOT EXISTS announcements (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    is_active BOOLEAN DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table: events
CREATE TABLE IF NOT EXISTS events (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    event_date DATE NOT NULL,
    event_time TIME,
    venue VARCHAR(255),
    event_type VARCHAR(50),
    is_active BOOLEAN DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table: resources
CREATE TABLE IF NOT EXISTS resources (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    category VARCHAR(50) NOT NULL,
    description TEXT,
    file_path VARCHAR(255) NOT NULL,
    file_size BIGINT,
    downloads INT DEFAULT 0,
    is_active BOOLEAN DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table: downloads
CREATE TABLE IF NOT EXISTS downloads (
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT NOT NULL,
    resource_id INT NOT NULL,
    downloaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (student_id) REFERENCES students(id),
    FOREIGN KEY (resource_id) REFERENCES resources(id)
);

-- Table: activity_logs
CREATE TABLE IF NOT EXISTS activity_logs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    user_type VARCHAR(50) NOT NULL,
    activity VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Sample Data: Announcements
INSERT INTO announcements (title, content, created_at) VALUES 
('Welcome to the new session', 'Classes for the new batch will start from next week.', NOW()),
('Exam Schedule Released', 'Please check the notice board for the upcoming internal exams.', NOW() - INTERVAL 1 DAY);

-- Sample Data: Events
INSERT INTO events (title, event_date, event_time, venue, event_type) VALUES 
('Orientation Program', CURDATE() + INTERVAL 5 DAY, '10:00:00', 'Main Auditorium', 'Academic'),
('Annual Sports Meet', CURDATE() + INTERVAL 20 DAY, '09:00:00', 'College Ground', 'Sports');

-- Sample Data: Resources
INSERT INTO resources (title, category, description, file_path, file_size) VALUES 
('Human Anatomy Syllabus', 'anatomy', 'Complete syllabus for 1st year', 'syllabus_anatomy.pdf', 102400),
('Lab Safety Guidelines', 'basic science', 'Safety protocols to be followed in the lab', 'safety_guidelines.pdf', 204800);
