export default () => ({
    environment: process.env.ENVIRONMENT || 'dev',
    mongo: {
        host: process.env.MONGO_DB_HOST,
        port: process.env.MONGO_DB_PORT,
        dbName: process.env.MONGO_DB_NAME,
        user: process.env.MONGO_DB_USER,
        pass: process.env.MONGO_DB_PASS,
        autoCreate: !!process.env.MONGO_BUFFER_COMMANDS,
        bufferCommands: !!process.env.MONGO_BUFFER_COMMANDS,
    },
    newsApi: {
        apiKey: process.env.NEWS_API_TOKEN,
    },
    debug: process.env.ENVIRONMENT !== 'prod',
  });