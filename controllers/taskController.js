const taskModel = require('../models/taskModel');

// Show all tasks (Home page)
const showHomePage = async (req, res) => {
    try {
        const tasks = await taskModel.getAllTasks();
        res.render('index', { 
            title: 'Task Manager - Home',
            tasks: tasks,
            currentPage: 'home'
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

// Show create task form
const showCreateForm = (req, res) => {
    res.render('create', { 
        title: 'Create New Task',
        currentPage: 'create'
    });
};

// Create new task
const createTask = async (req, res) => {
    try {
        const { title, description, status, priority } = req.body;
        
        // Validation
        if (!title || title.trim() === '') {
            return res.status(400).send('Title is required');
        }
        
        await taskModel.createTask({
            title: title.trim(),
            description: description || '',
            status: status || 'pending',
            priority: priority || 'medium'
        });
        
        res.redirect('/');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error creating task');
    }
};

// Show single task
const showTask = async (req, res) => {
    try {
        const task = await taskModel.getTaskById(req.params.id);
        
        if (!task) {
            return res.status(404).send('Task not found');
        }
        
        res.render('show', { 
            title: task.title,
            task: task,
            currentPage: 'view'
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

// Show edit form
const showEditForm = async (req, res) => {
    try {
        const task = await taskModel.getTaskById(req.params.id);
        
        if (!task) {
            return res.status(404).send('Task not found');
        }
        
        res.render('edit', { 
            title: 'Edit Task',
            task: task,
            currentPage: 'edit'
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

// Update task
const updateTask = async (req, res) => {
    try {
        const { title, description, status, priority } = req.body;
        
        if (!title || title.trim() === '') {
            return res.status(400).send('Title is required');
        }
        
        const updated = await taskModel.updateTask(req.params.id, {
            title: title.trim(),
            description: description || '',
            status: status,
            priority: priority
        });
        
        if (updated === 0) {
            return res.status(404).send('Task not found');
        }
        
        res.redirect(`/task/${req.params.id}`);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error updating task');
    }
};

// Delete task
const deleteTask = async (req, res) => {
    try {
        const deleted = await taskModel.deleteTask(req.params.id);
        
        if (deleted === 0) {
            return res.status(404).send('Task not found');
        }
        
        res.redirect('/');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error deleting task');
    }
};

// Filter tasks by status
const filterByStatus = async (req, res) => {
    try {
        const status = req.params.status;
        const tasks = await taskModel.getTasksByStatus(status);
        
        res.render('index', { 
            title: `Tasks: ${status}`,
            tasks: tasks,
            currentPage: 'home',
            filterStatus: status
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

module.exports = {
    showHomePage,
    showCreateForm,
    createTask,
    showTask,
    showEditForm,
    updateTask,
    deleteTask,
    filterByStatus
};