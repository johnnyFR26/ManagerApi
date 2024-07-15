import Suporte from '#models/suporte'
import type { HttpContext } from '@adonisjs/core/http'

export default class SupotesController {
  async index({ response }: HttpContext) {
    const suportes = await Suporte.all()
    return response.ok(suportes)
  }

  async store({ request, response }: HttpContext) {
    const data = request.only(['name', 'email', 'number', 'type'])
    const suporte = await Suporte.create(data)
    return response.created(suporte)
  }
}