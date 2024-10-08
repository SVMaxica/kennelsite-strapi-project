module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'ventovelocedb'),
      user: env('DATABASE_USERNAME', 'sandragustafsson'),
      password: env('DATABASE_PASSWORD', 'Roya_the_saluki!!'),
      ssl: env.bool('DATABASE_SSL', false),
    },
    debug: false,
  },
});
