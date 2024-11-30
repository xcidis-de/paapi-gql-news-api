import { Resolver, Query } from '@nestjs/graphql';
import { NewsApiService } from 'news-api-ts';
import { GraphQLEverything, GraphQLEverythingQuery, GraphQLSource, GraphQLSourceQuery, GraphQLTopHeadlinesQuery } from './news-api.models';
import { Body } from '@nestjs/common';

@Resolver(() => GraphQLEverything)
export class NewsApiEverythingResolver {
    constructor(
      private newsApiService: NewsApiService,
    ) {}

    @Query(() => GraphQLEverything, { name: 'newsApiEverything' })
    async newsApiEverythingQuery(@Body('params') query: GraphQLEverythingQuery) {
      return this.newsApiService.getEverything(query)
    }

    @Query(() => GraphQLEverything, { name: 'newsApiTopHeadlines' })
    async newsApiTopHeadlinesQuery(@Body('params') query: GraphQLTopHeadlinesQuery) {
        return this.newsApiService.getTopHeadlines(query)
    }
}

@Resolver(() => GraphQLSource)
export class NewsApiSourceResolver {
    
    constructor(
      private newsApiService: NewsApiService,
    ) {}

    @Query(() => GraphQLSource, { name: 'newsApiSources' })
    async newsApiSourcesQuery(@Body('params') query: GraphQLSourceQuery) {
      return this.newsApiService.getSources(query)
    }
}