import express from 'express'
import { createTask, getAllTasks } from '../controllers/TasksController.js'
const router = express.Router()

router.route('/').post(createTask).get(getAllTasks)

export default router
