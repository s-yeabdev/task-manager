const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// Routes
router.get('/', taskController.showHomePage);
router.get('/create', taskController.showCreateForm);
router.post('/create', taskController.createTask);
router.get('/task/:id', taskController.showTask);
router.get('/edit/:id', taskController.showEditForm);
router.post('/edit/:id', taskController.updateTask);
router.post('/delete/:id', taskController.deleteTask);
router.get('/filter/:status', taskController.filterByStatus);

module.exports = router;