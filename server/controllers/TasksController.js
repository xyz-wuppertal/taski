import Task from '../models/TaskModels.js'
import { groupBy } from '../utils/tasksGroupBy.js'

const createTask = async (req, res, next) => {
  const { values } = req.body
  console.log(values.status)
  const createTask = await Task.create(values)
  res.json(createTask)
}

const getAllTasks = async (req, res, next) => {
  /* const groupedTasks = await Task.aggregate([
    {
      $group: {
        _id: '$status', // Group documents by the "status" field
        tasks: { $push: '$$ROOT' }, // Push each document into an array named "tasks"
        count: { $sum: 1 }, // Count the number of documents in each group
      },
    },
  ]) */
  /* const groupedTasksResponse = groupedTasks.reduce(
      (acc, taskGroup) => ({
        ...acc,
        [taskGroup._id]: taskGroup.tasks,
      }),
      {}
    )
    res.json(groupedTasksResponse) */
  const tasks = await Task.find({}).sort({ createdAt: 1 })
  if (!tasks) res.json('No Tasks found')

  const GroupByStatus = Object.values(groupBy(tasks, 'status'))
  const GroupByPriority = Object.values(groupBy(tasks, 'priority'))
  res.json({
    GroupByStatus,
    GroupByPriority,
    tasks,
  })
}

const deleteTask = async (req, res) => {
  const task = await Task.findById(req.params.taskId)
  if (!task) res.json('Task not found')
  await task.deleteOne()
  res.json('Task deleted')
}

const editTask = async (req, res) => {
  try {
    const taskId = req.params.taskId
    const task = await Task.findById(taskId)

    if (!task) {
      return res.status(404).json({ message: 'Task not found' })
    }

    const updatedTask = await Task.findByIdAndUpdate(taskId, req.body, {
      new: true,
    })

    if (!updatedTask) {
      return res.status(500).json({ message: 'Error updating task' })
    }

    return res.status(200).json(updatedTask)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Server error' })
  }
}

export { createTask, getAllTasks, deleteTask, editTask }
