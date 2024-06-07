import express from 'express'
import cors from 'cors'
import connectDB from './db/connect.js'
import dotenv from 'dotenv'
import TasksRouter from './routers/TasksRouter.js'

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/tasks', TasksRouter)

const PORT = process.env.PORT || 3000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
