# R-L Technical Institute (Node.js Version)

This is a Node.js/Express.js conversion of the R-L Technical Institute student portal.

## Features
- Student Registration & Login
- Dashboard with recent activity and announcements
- Resource Library with file downloads
- Profile Management
- Admin Panel (Placeholder)

## Prerequisites
- Node.js (v14 or higher)
- MySQL Database

## Installation

1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Database Setup**
    - Create a MySQL database (e.g., `rlinstitute`).
    - Import the schema from `database_schema.sql`:
      ```bash
      mysql -u root -p rlinstitute < database_schema.sql
      ```

3.  **Configuration**
    - Rename `.env.example` to `.env` (if applicable, or just edit `.env`).
    - Update `.env` with your database credentials:
      ```
      DB_HOST=localhost
      DB_USER=root
      DB_PASSWORD=yourpassword
      DB_NAME=rlinstitute
      ```

4.  **Run the Application**
    ```bash
    npm start
    ```
    The server will start at `http://localhost:3000`.

## Project Structure
- `app.js`: Application entry point.
- `config/`: Database configuration.
- `routes/`: Express routes (controllers).
- `views/`: EJS templates.
- `public/`: Static assets (CSS, JS, Images).
- `utils/`: Helper functions.
- `legacy_backup/`: Archived PHP files from the original version.

## Authors
- R-L Technical Institute Dev Team
