const TABLE_NAME = 'sessions';

exports.up = function (knex) {
  return knex.schema.createTable(TABLE_NAME, function (t) {
    t.string('id').unsigned().primary();
    t.dateTime('createdAt').notNull();
    t.dateTime('updatedAt').nullable();
    t.dateTime('deletedAt').nullable();

    t.bigInteger('expiredAt').notNull();

    t.text('json').notNull();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(TABLE_NAME);
};
