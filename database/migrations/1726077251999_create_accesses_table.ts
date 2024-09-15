import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'accesses'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('client_id').unsigned().references('id').inTable('clients').onDelete('CASCADE')
      table.string('reason').notNullable()
      table.boolean('status').defaultTo(false)

      table.timestamp('deadline').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
