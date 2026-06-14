Project title: Task Manager Application

Group members:
1. Naomi Zenebe
2. Yohannes Habte
3. Yasir Hamid
4. Yeabtsega Samuel
5. Yohannes Gebru

Features:
- Create new tasks with title, description, status, and priority
- View all tasks in a responsive grid layout
- Edit existing tasks
- Delete tasks with confirmation
- Filter tasks by status (Pending, In Progress, Completed)
- Priority levels (Low, Medium, High)

Technologies used:
- Node.js (JavaScript runtime)
- Express.js (Web framework)
- EJS (Embedded JavaScript templating)
- MySQL (Database)
- HTML5 & CSS3 (Frontend styling)
- method-override (HTTP method override)
- body-parser (Request body parsing)

Installation steps:
1. Install Node.js from https://nodejs.org/
2. Install MySQL from https://www.mysql.com/
3. Clone the repository:
   git clone https://github.com/s-yeabdev/task-manager.git
4. Navigate to project folder:
   cd task-manager-app
5. Install dependencies:
   npm install
6. Create MySQL database:
   - Open MySQL command line
   - Run: CREATE DATABASE task_manager_db;
   - Use: USE task_manager_db;
   - Create table:
     CREATE TABLE tasks (
         id INT AUTO_INCREMENT PRIMARY KEY,
         title VARCHAR(255) NOT NULL,
         description TEXT,
         status ENUM('pending','in_progress','completed') DEFAULT 'pending',
         priority ENUM('low','medium','high') DEFAULT 'medium',
         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
         updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
     );
7. Update database password in config/db.js (replace '12345678' with your MySQL password)
8. Start the application:
   node server.js
9. Open browser and go to http://localhost:3000

