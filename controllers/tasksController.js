const Task = require('../models/task')

const getAllTasks = (req, res)=> {
    res.send('all tasks items')
}

const createTask = async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({task})
}

const getTask = (req, res) => {

}

const deleteTask = (req, res) => {
    
}

const updateTask = (req, res) => {
    
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    deleteTask,
    updateTask
}