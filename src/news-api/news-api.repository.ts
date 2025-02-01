import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { getModelForClass, prop, ReturnModelType } from '@typegoose/typegoose';
import { NewsApiArticle, NewsApiQueryResponse, NewsApiSource, NewsApiSourcesResponse } from 'news-api-ts';
import mongoConnect from '../common/database';

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
    ) {}
    

    async saveHeadlines(topHeadlines: NewsApiQueryResponse) {
        const conn = await mongoConnect(this.configService);
        console.log(conn.db);
            // .then((conn) => {
            //     conn.collection(NewsApiHistory.name);
            //     getModelForClass(NewsApiHistory).create(topHeadlines);
            //     conn.close()
            // })
            // .catch(err => console.error(err))
    }

    async saveSources(sources: NewsApiSourcesResponse) {
        const model = getModelForClass(NewsApiSourceHistory)
        await model.create(sources);
    }
}
