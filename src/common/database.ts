import mongoose from 'mongoose';

export default async function(configService) {
    mongoose.set({
        debug: configService.get('debug') && true,
        bufferCommands: !!configService.get('mongo.bufferCommands'),
        autoCreate: !!configService.get('mongo.autoCreate'),
    })
    const host = configService.get('mongo.host');
    const dbName = configService.get('mongo.dbName');
    const port = configService.get('mongo.port');
    const pass = configService.get('mongo.pass');
    const user = configService.get('mongo.user');
    const uri = `mongodb://${host}:${port}/${dbName}`;
    console.log(uri)
    return await mongoose.createConnection(uri);
}