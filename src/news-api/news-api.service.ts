import { Injectable } from "@nestjs/common";
import { NewsApiEverythingRequestParams, NewsApiLibService, NewsApiQueryResponse, NewsApiSourcesResponse, NewsApiTopHeadlineRequestParams } from 'news-api-ts';
import { GraphQLEverythingResponse, GraphQLSourcesResponse, GraphQLTopHeadlinesResponse } from "./news-api.models";

@Injectable()
export class NewsApiService {
    constructor(
        private newsApiLib: NewsApiLibService
    ) {}

    async getTopHeadlines(filter: NewsApiTopHeadlineRequestParams): Promise<GraphQLTopHeadlinesResponse> {
        const response: NewsApiQueryResponse = await this.newsApiLib.getTopHeadlines(filter);

        return {
            articles: response.articles,
            page: {
                pageSize: response.articles.length,
                pageNumber: filter.page
            },
            totalResults: response.totalResults,
        }
    }

    async getEverything(filter: NewsApiEverythingRequestParams): Promise<GraphQLEverythingResponse> {
        const response: NewsApiQueryResponse = await this.newsApiLib.getEverything(filter);
        
        return {
            articles: response.articles,
            page: {
                pageSize: response.articles.length,
                pageNumber: filter.page
            },
            totalResults: response.totalResults,
        }
    }
    
    async getSources(filter): Promise<GraphQLSourcesResponse> {
        const res: NewsApiSourcesResponse = await this.newsApiLib.getSources(filter);
        
        return {
            sources: res.sources,
            totalResults: res.sources.length,
        }
    }
}
