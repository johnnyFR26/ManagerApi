import Access from '#models/access'
import type { HttpContext } from '@adonisjs/core/http'

export default class AccessesController {
  async index({ response }: HttpContext) {
    const accesses = await Access.all()
    return response.ok(accesses)
  }

  async store({ request, response }: HttpContext) {
    const data = request.only(['client_id', 'reason', 'deadline'])
    const access = await Access.create(data)
    return response.created(access)
  }

  async update({ params, request, response }: HttpContext) {
    const access = await Access.findOrFail(params.id)
    const data = request.only(['client_id', 'reason', 'status', 'deadline'])
    access.merge(data)
    await access.save()
    return response.status(204).json(access)
  }
}
