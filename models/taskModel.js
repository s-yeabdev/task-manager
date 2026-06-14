const db = require('../config/db');

// Get all tasks
const getAllTasks = async () => {
    try {
        const [rows] = await db.query('SELECT * FROM tasks ORDER BY created_at DESC');
        return rows;
    } catch (error) {
        throw error;
    }
};

// Get task by ID
const getTaskById = async (id) => {
    try {
        const [rows] = await db.query('SELECT * FROM tasks WHERE id = ?', [id]);
        return rows[0];
    } catch (error) {
        throw error;
    }
};

// Create new task
const createTask = async (task) => {
    const { title, description, status, priority } = task;
    try {
        const [result] = await db.query(
            'INSERT INTO tasks (title, description, status, priority) VALUES (?, ?, ?, ?)',
            [title, description, status, priority]
        );
        return result.insertId;
    } catch (error) {
        throw error;
    }
};

// Update task
const updateTask = async (id, task) => {
    const { title, description, status, priority } = task;
    try {
        const [result] = await db.query(
            'UPDATE tasks SET title = ?, description = ?, status = ?, priority = ? WHERE id = ?',
            [title, description, status, priority, id]
        );
        return result.affectedRows;
    } catch (error) {
        throw error;
    }
};

// Delete task
const deleteTask = async (id) => {
    try {
        const [result] = await db.query('DELETE FROM tasks WHERE id = ?', [id]);
        return result.affectedRows;
    } catch (error) {
        throw error;
    }
};

// Get tasks by status
const getTasksByStatus = async (status) => {
    try {
        const [rows] = await db.query('SELECT * FROM tasks WHERE status = ? ORDER BY created_at DESC', [status]);
        return rows;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
    getTasksByStatus
};