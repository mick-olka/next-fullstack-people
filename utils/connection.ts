import { connect, connection, ConnectOptions, set } from 'mongoose'
const {
  // Attempts to connect to MongoDB and then tries to connect locally
  DATABASE_URL = 'mongodb://localhost:27017/univ3-2',
} = process.env

const options: ConnectOptions = {}

export async function connectToDatabase() {
  set('strictQuery', false)
  if (!connection.readyState) {
    console.log('Connecting to DB')
    await connect(DATABASE_URL, options)
  }
}
