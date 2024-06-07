import Task from '../models/TaskModels.js'
import { groupBy } from '../utils/tasksGroupBy.js'

const createTask = async (req, res, next) => {
  const createTask = await Task.create(req.body)
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
  const tasks = await Task.find({})
  if (!tasks) res.json('No Tasks found')

  const GroupByStatus = Object.values(groupBy(tasks, 'status'))
  const GroupByPriority = Object.values(groupBy(tasks, 'priority'))
  res.json({
    GroupByStatus,
    GroupByPriority,
  })
}

export { createTask, getAllTasks }
