const express = require('express');
const router = express.Router();
const { getAllTasks, storeTask, getTask, deleteTask, updateTask} = require('../controllers/tasksController');

router.route('/').get(getAllTasks).post(storeTask);
router.route('/:id').get(getTask).delete(deleteTask).patch(updateTask)

module.exports = router