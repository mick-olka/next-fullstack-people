import { NextApiRequest, NextApiResponse } from 'next'
export const nothing = 'nothing'

export type ResT<T> = NextApiResponse<T | { error: string }>

export type ReqT = NextApiRequest

// export interface I_Person {
//   id: string
//   name: string
// }
