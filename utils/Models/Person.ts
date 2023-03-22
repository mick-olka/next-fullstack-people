import mongoose, { Document, model, Model, Schema } from 'mongoose'

export interface I_Person extends Document {
  name: string
  phone: string
  age: number
  sex: 'male' | 'female' | 'robot'
  dob: Date
  email: string
  about: string
  country: string
  address: string
  color: string
  // map: string
}

const PersonSchema: Schema = new Schema({
  name: {
    type: String,
  },
  sex: {
    type: String,
    enum: ['male', 'female', 'robot'],
    default: 'male',
  },
  dob: {
    type: Date,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  age: {
    type: Number,
  },
  about: {
    type: String,
  },
  country: {
    type: String,
  },
  address: {
    type: String,
  },
  color: {
    type: String,
  },
})

export const Person = (mongoose.models.Person || model('Person', PersonSchema)) as Model<I_Person>
