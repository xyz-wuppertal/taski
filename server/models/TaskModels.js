import mongoose from 'mongoose'

const Schema = mongoose.Schema

const TaskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    priority: {
      type: String,
      enum: ['Low', 'Medium', 'High'],
      default: 'Low',
    },
    status: {
      type: String,
      enum: ['Todo', 'Doing', 'Code Review', 'Testing', 'Done'],
      default: 'Todo',
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
)

const Task = mongoose.model('Task', TaskSchema)

export default Task
