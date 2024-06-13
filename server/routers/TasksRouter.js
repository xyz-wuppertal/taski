import express from 'express'
import {
  createTask,
  deleteTask,
  editTask,
  getAllTasks,
  getSingeTaskById
} from '../controllers/TasksController.js'
const router = express.Router()

router.route('/').post(createTask).get(getAllTasks)
router.route('/:taskId').delete(deleteTask).put(editTask).get(getSingeTaskById)
export default router
