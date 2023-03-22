import * as personService from '@/utils/api_services/person.service'
import { resNotFound } from '@/utils/helpers'
import { I_Person } from '@/utils/Models'
import { ReqT, ResT } from '@/utils/types'

export default async function handler(req: ReqT, res: ResT<I_Person>) {
  try {
    const { query, method } = req
    let dat = null
    const body = req.body ? JSON.parse(req.body) : null
    switch (method) {
      case 'GET':
        dat = await personService.getById(String(query.id))
        if (!dat) resNotFound(res)
        else res.status(200).json(dat)
        break
      case 'PATCH':
        if (!body && !body.data) throw new Error('No data in body')
        dat = await personService.update(String(query.id), body.data)
        if (!dat) resNotFound(res)
        else res.status(200).json(dat)
        break
      case 'DELETE':
        dat = await personService.deleteById(String(query.id))
        if (!dat) resNotFound(res)
        else res.status(200).json(dat)
        break
      default:
        res.setHeader('Allow', ['GET', 'PATCH', 'DELETE'])
        res.status(405).end(`Method ${method} Not Allowed`)
    }
  } catch (e) {
    res.status(500).json({ error: String(e) })
  }
}
