import mongoose from 'mongoose'
const connectDB = (url) => {
  console.log('Connecting to DB')
  return mongoose.connect(url)
}

export default connectDB
