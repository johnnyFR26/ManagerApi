import { DateTime } from 'luxon'
import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import Client from './client.js'
import type { HasOne } from '@adonisjs/lucid/types/relations'

export default class Access extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare client_id: number

  @column()
  declare reason: string

  @column()
  declare status: boolean

  @column.dateTime({ autoCreate: false })
  declare deadline: DateTime

  @hasOne(() => Client, {
    foreignKey: 'id',
    localKey: 'client_id',
  })
  declare client: HasOne<typeof Client>
}
