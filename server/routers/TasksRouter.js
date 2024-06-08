import express from 'express'
import {
  createTask,
  deleteTask,
  getAllTasks,
} from '../controllers/TasksController.js'
const router = express.Router()

router.route('/').post(createTask).get(getAllTasks)
router.route('/:taskId').delete(deleteTask)
export default router
