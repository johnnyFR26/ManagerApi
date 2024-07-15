import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'clients'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name', 100).notNullable()
      table.string('telephone', 20).notNullable()
      table.string('email', 254).notNullable()
      table.jsonb('pass_to_pass')
      table.text('observation')
      table.string('plan', 254).notNullable()
      table.boolean('second_payment').defaultTo(false)
      table.dateTime('date').notNullable()
      table
        .integer('suporte_id')
        .unsigned()
        .references('id')
        .inTable('suportes')
        .onDelete('CASCADE')
        .notNullable()
      table.timestamps(true)
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
