import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { getModelForClass, prop } from '@typegoose/typegoose';
import { NewsApiArticle, NewsApiQueryResponse, NewsApiSource, NewsApiSourcesResponse } from 'news-api-ts';
import mongoose from "mongoose";

class NewsApiHistory implements NewsApiQueryResponse {
    @prop()
    status!: string;
    @prop()
    totalResults!: number;
    @prop()
    articles!: NewsApiArticle[];
}

class NewsApiSourceHistory implements NewsApiSourcesResponse {
    @prop()
    status!: string;
    @prop()
    sources!: NewsApiSource[];
}

@Injectable()
export class NewsApiRepository {
    constructor(
        private configService: ConfigService,
    ) {
        // mongoose.set({
        //     debug: this.configService.get('debug') && true,
        //     bufferCommands: !!this.configService.get('mongo.bufferCommands'),
        //     autoCreate: !!this.configService.get('mongo.autoCreate'),
        // })
        // const host = this.configService.get('mongo.host');
        // const dbName = this.configService.get('mongo.dbName');
        // const pass = this.configService.get('mongo.pass');
        // const user = this.configService.get('mongo.user');
        // const uri = `mongodb://${user}:${pass}@${host}/${dbName}`;
        // this.conn = mongoose.createConnection(uri);
        // this.conn.on('connected', () => {
        //     console.log('Connected to MongoDB');
        // });
    }
    
    private NewsApiHistoryModel = getModelForClass(NewsApiHistory);
    private NewsApiSourceHistoryModel = getModelForClass(NewsApiSourceHistory);
    private conn: mongoose.Connection;

    async saveTopHeadlines(topHeadlines: NewsApiQueryResponse) {
        const history = new this.NewsApiHistoryModel(topHeadlines);
        await history.save();
    }

    async saveSources(sources: NewsApiSourcesResponse) {
        const history = new this.NewsApiSourceHistoryModel(sources);
        await history.save();
    }
}
