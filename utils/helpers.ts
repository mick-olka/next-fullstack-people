import { NextApiResponse } from 'next'
import { toast } from 'react-toastify'

export const toasterPending = <T>(
  method: Promise<T>,
  pending?: string,
  error?: string,
  success?: string,
): Promise<T> => {
  return toast.promise(method, {
    pending: pending || 'Loading...',
    error: {
      render({ data }) {
        console.log(data)
        return error || 'Error'
      },
    },
    success: success || 'Success',
  })
}

export const resNotFound = (res: NextApiResponse<{ error: string }>) => {
  return res.status(404).json({ error: 'Not Found' })
}

export const _return_promise_data = <T>(data: T): Promise<T> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 1000)
  })
}

export const swrMutationCreator = async <T>(
  url: string,
  fetchOptions?: { method: string; body?: string },
): Promise<T> => {
  const fetcher = async (): Promise<T> => {
    const res = await fetch(url, fetchOptions)
    if (res.ok) {
      return await res.json()
    } else throw new Error(String(res.body))
  }
  return await toasterPending(fetcher())
}

export const fetcher = (url: string) => fetch(url).then((res) => res.json())

export const getFilterForSearch = (
  search_string: string | undefined,
  fields: string[],
): any => {
  let filter: any = {}
  if (search_string) {
    const search_words = search_string.split(' ').join('|')
    const regex = new RegExp(search_words, 'i') // i for case insensitive
    const regex_fields = fields.map((f) => ({ [f]: { $regex: regex } }))
    filter = { $or: regex_fields }
  }
  return filter
}
