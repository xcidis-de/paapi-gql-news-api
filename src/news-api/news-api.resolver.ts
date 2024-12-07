import { Resolver, Query, Args } from '@nestjs/graphql';
import { GraphQLEverythingQuery, GraphQLEverythingResponse, GraphQLSourceQuery, GraphQLSourcesResponse, GraphQLTopHeadlinesQuery, GraphQLTopHeadlinesResponse } from './news-api.models';
import { NewsApiService } from './news-api.service';

@Resolver()
export class NewsApiResolver {
    constructor(
      private newsApiService: NewsApiService,
    ) {}

    @Query(() => GraphQLEverythingResponse, { name: 'newsApiEverything' })
    async newsApiEverythingQuery(
      @Args('filter') filter: GraphQLEverythingQuery
    ) {
      return this.newsApiService.getEverything(filter)
    }

    @Query(() => GraphQLSourcesResponse, { name: 'newsApiSources'})
    async newsApiSourcesQuery(
      @Args('filter', { nullable: true }) filter?: GraphQLSourceQuery
    ) {
      return this.newsApiService.getSources(filter)
    }

    @Query(() => GraphQLTopHeadlinesResponse, { name: 'newsApiTopHeadlines' })
    async newsApiTopHeadlinesQuery(
      @Args('filter') filter: GraphQLTopHeadlinesQuery
     ) {
        return this.newsApiService.getTopHeadlines(filter)
    }
}