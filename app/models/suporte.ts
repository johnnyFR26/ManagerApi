import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Client from './client.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Suporte extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare email: string

  @column()
  declare number: string

  @column()
  declare type: string

  @hasMany(() => Client)
  declare clients: HasMany<typeof Client>
}
