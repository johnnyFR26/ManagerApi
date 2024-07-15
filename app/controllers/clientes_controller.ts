import Client from '#models/client'
import { HttpContext } from '@adonisjs/core/http'
import { DateTime } from 'luxon'

export default class ClientesController {
  async index({ response }: HttpContext) {
    const clients = await Client.all()
    return response.ok(clients)
  }

  async store({ request, response }: HttpContext) {
    const data = request.only([
      'name',
      'email',
      'telephone',
      'date',
      'observation',
      'plan',
      'passToPass',
      'suporteId',
      'updatedAt',
    ])
    const plan = data.plan
    const date = DateTime.fromISO(data.date)

    if (plan === 'Recorrente') {
      data.updatedAt = date.plus({ months: 5 }).toISO()
    } else if (plan === 'Pix 49,90') {
      data.updatedAt = date.plus({ months: 1 }).toISO()
    }

    const client = await Client.create(data)
    return response.created(client)
  }

  async show({ params, response }: HttpContext) {
    const client = await Client.findOrFail(params.id)
    return response.ok(client)
  }

  async update({ params, request, response }: HttpContext) {
    const client = await Client.findOrFail(params.id)
    const data = request.only([
      'name',
      'email',
      'telephone',
      'date',
      'observation',
      'plan',
      'passToPass',
      'suporteId',
    ])
    client.merge(data)
    await client.save()
    return response.status(204).json(client)
  }

  async destroy({ params, response }: HttpContext) {
    const client = await Client.findOrFail(params.id)
    await client.delete()
    return response.noContent()
  }

  async clientWithSuporte({ response }: HttpContext) {
    const clients = await Client.query().preload('suporte')
    return response.ok(clients)
  }
}
