export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    environment: process.env.ENVIRONMENT,
    database: {
        mongoDbUri: process.env.MONGO_DB_URI,
        mongoDbName: process.env.MONGO_DB_NAME,
        mongoDbUser: process.env.MONGO_DB_USER,
        mongoDbPass: process.env.MONGO_DB_PASS,
        autoCreate: !!process.env.MONGO_BUFFER_COMMANDS,
        bufferCommands: !!process.env.MONGO_BUFFER_COMMANDS,
    },
    debug: process.env.ENVIROMENT === 'development',
  });