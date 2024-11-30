import { Resolver, Query } from '@nestjs/graphql';
import { NewsApiService } from 'news-api-ts';
import { GraphQLEverything, GraphQLEverythingQuery, GraphQLSource, GraphQLSourceQuery, GraphQLTopHeadlinesQuery } from './news-api.models';
import { Body } from '@nestjs/common';

@Resolver(() => GraphQLEverything)
export class NewsApiEverythingResolver {
    constructor(
      private newsApiService: NewsApiService,
    ) {}

    @Query(() => GraphQLEverythingQuery, { name: 'newsApiEverything' })
    async newsApiEverythingQuery(@Body('query') query: GraphQLEverythingQuery) {
      return this.newsApiService.getEverything(query)
    }

    @Query(() => GraphQLTopHeadlinesQuery, { name: 'newsApiTopHeadlines' })
    async newsApiTopHeadlinesQuery(@Body('query') query: GraphQLTopHeadlinesQuery) {
        return this.newsApiService.getTopHeadlines(query)
    }
}

@Resolver(() => GraphQLSource)
export class NewsApiSourceResolver {
    
    constructor(
      private newsApiService: NewsApiService,
    ) {}

    @Query(() => GraphQLSourceQuery, { name: 'newsApiSources' })
    async newsApiSourcesQuery(@Body('query') query: GraphQLEverythingQuery) {
      return this.newsApiService.getSources(query)
    }
}