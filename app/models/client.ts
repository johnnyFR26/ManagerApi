import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Suporte from './suporte.js'

export default class Client extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare email: string

  @column()
  declare telephone: string

  @column()
  declare passToPass: JSON

  @column()
  declare observation: string

  @column()
  declare secondPayment: boolean

  @column()
  declare plan: string

  @column.dateTime({ autoCreate: false })
  declare date: DateTime

  @column()
  declare suporteId: number

  @column.dateTime({ autoCreate: false })
  declare updatedAt: DateTime

  @belongsTo(() => Suporte)
  declare suporte: BelongsTo<typeof Suporte>
}
