import useSWR from 'swr'
import useSWRMutation from 'swr/mutation'

import { fetcher, swrMutationCreator } from '@/utils/helpers'
import { I_Person } from '@/utils/Models'

export interface I_PersonDTO {
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
}

export const people_api_url = '/api/people/'

const deletePerson = async (url: string, { arg }: { arg: string }) =>
  swrMutationCreator<I_Person>(url + arg, { method: 'DELETE' })

const deleteManyPerson = async (url: string, { arg }: { arg: string[] }) =>
  swrMutationCreator<I_Person>(url, {
    method: 'PATCH',
    body: JSON.stringify({ data: { ids: arg } }),
  })

const createPerson = async (url: string, { arg }: { arg: I_PersonDTO }) =>
  swrMutationCreator<I_Person>(url, { method: 'POST', body: JSON.stringify({ data: arg }) })

const updatePerson = async (url: string, { arg }: { arg: Partial<I_PersonDTO> & { id: string } }) =>
  swrMutationCreator<I_Person>(url + arg.id, {
    method: 'PATCH',
    body: JSON.stringify({ data: arg }),
  })

export const getPeopleList = async (): Promise<I_Person[]> => {
  const res = await fetch('http://localhost:3000/api/people')
  if (res.ok) {
    return await res.json()
  } else throw new Error(String(res.body))
}
export const getPerson = async (id: string): Promise<I_Person> => {
  const res = await fetch('http://localhost:3000/api/people/' + id)
  if (res.ok) {
    return await res.json()
  } else throw new Error(String(res.body))
}

export const useGetPeopleList = (regex?: string) => {
  const url = regex ? `${people_api_url}?regex=${regex}` : people_api_url
  const data = useSWR<I_Person[]>(url, fetcher)
  return data
}

export const useGetPerson = (id: string) => {
  const data = useSWR<I_Person>(people_api_url + id, fetcher)
  return data
}

export const useCreatePerson = () => {
  const data = useSWRMutation(people_api_url, createPerson)
  return data
}

export const useDeletePerson = () => {
  const data = useSWRMutation(people_api_url, deletePerson)
  return data
}

export const useDeleteManyPerson = () => {
  const data = useSWRMutation(people_api_url, deleteManyPerson)
  return data
}

export const useUpdatePerson = () => {
  const data = useSWRMutation(people_api_url, updatePerson)
  return data
}
