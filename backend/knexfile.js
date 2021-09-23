require('dotenv').config();

module.exports = {
  client: 'pg',
  connection:
    'postgresql://postgres:vBU255@elKuKRePU@db.rypdushljuuibsanetzu.supabase.co:5432/postgres',
  useNullAsDefault: true,
  debug: true,
  migrations: {
    directory: './src/migrations',
    loadExtensions: ['.js'],
  },
};
