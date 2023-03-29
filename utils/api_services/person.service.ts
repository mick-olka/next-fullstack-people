import { connectToDatabase } from '../connection'
import { getFilterForSearch } from '../helpers'
import { I_Person, Person } from '../Models'

connectToDatabase()
export async function getList({ regex }: { regex?: string }): Promise<I_Person[]> {
  const list = await Person.find(getFilterForSearch(regex, ['name', 'email', 'country']))
  return list
}
export async function getById(id: string): Promise<I_Person | null> {
  const doc = await Person.findById(id)
  return doc
}

export async function create(data: Omit<I_Person, '_id'>): Promise<I_Person> {
  const doc = await Person.create(data)
  return doc
}

export async function update(
  id: string,
  data: Partial<Omit<I_Person, '_id'>>,
): Promise<I_Person | null> {
  const doc = await Person.findByIdAndUpdate(id, data, { new: true })
  return doc
}

export async function deleteById(id: string): Promise<I_Person | null> {
  const doc = await Person.findByIdAndDelete(id)
  return doc
}

export async function deleteMany(ids: string[]): Promise<string[]> {
  await Promise.all(ids.map((id) => Person.findByIdAndDelete(id)))
  return ids
}
