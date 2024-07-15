import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'suportes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name', 100).notNullable()
      table.string('type', 50)
      table.string('email', 254).notNullable()
      table.string('number', 20).notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
