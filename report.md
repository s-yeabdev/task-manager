Task Manager Application

1. Project Overview
This is a server-side rendered web application that allows users to manage daily tasks. The application supports full CRUD (Create, Read, Update, Delete) operations and task filtering by status. It was developed as a group assignment using Node.js, Express, EJS, and MySQL.

2. System Architecture
The application follows the MVC (Model-View-Controller) pattern:
- Model: Handles database queries (taskModel.js)
- View: EJS templates for rendering pages
- Controller: Contains business logic (taskController.js)
- Routes: Define URL endpoints (taskRoutes.js)
- Database: MySQL with a single table 'tasks'

3. Database Schema
Table name: tasks
Columns:
- id (INT, PRIMARY KEY, AUTO_INCREMENT)
- title (VARCHAR(255), NOT NULL)
- description (TEXT)
- status (ENUM: 'pending', 'in_progress', 'completed') default 'pending'
- priority (ENUM: 'low', 'medium', 'high') default 'medium'
- created_at (TIMESTAMP) default CURRENT_TIMESTAMP
- updated_at (TIMESTAMP) on update CURRENT_TIMESTAMP

4. Features Implemented
- Create a new task via form submission
- Read/View all tasks on the homepage
- View individual task details
- Update/edit existing tasks
- Delete tasks with confirmation
- Filter tasks by status (All, Pending, In Progress, Completed)
- Responsive user interface with priority color coding

5. Testing and Validation
- All CRUD operations tested and working
- Form validation ensures title is not empty
- Delete operation includes confirmation dialog
- Application runs without errors on Node.js
- MySQL connection successful with connection pool

6. Challenges and Solutions
- Method override for DELETE: Used method-override middleware with ?_method=DELETE
- EJS syntax errors: Corrected template literals and backticks
- MySQL connection: Used promise-based mysql2 pool for reliability

7. Conclusion
All core and research requirements (EJS partials, CRUD with MySQL, Express routing, middleware) have been successfully implemented. The application is fully functional and ready for submission.