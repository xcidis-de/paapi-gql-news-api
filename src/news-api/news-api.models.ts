import { Field, InputType, ObjectType } from '@nestjs/graphql';

import { 
    NewsApiArticle,
    NewsApiArticleSource,
    NewsApiCategories,
    NewsApiCountries,
    NewsApiEverythingRequestParams,
    NewsApiLanguages,
    NewsApiSearchIn, 
    NewsApiSortBy, 
    NewsApiSource,
    NewsApiSourcesRequestParams, 
    NewsApiTopHeadlineRequestParams
} from 'news-api-ts';

@ObjectType()
class GraphQLPageInfo {
    @Field({ nullable: false })
    pageSize!: number;
    @Field({ nullable: false })
    page!: number;
}

@InputType()
export class GraphQLSourceQuery implements NewsApiSourcesRequestParams {
    @Field({ nullable: true })
    category?: NewsApiCategories;
    @Field({ nullable: true })
    language?: NewsApiLanguages = NewsApiLanguages.en;
    @Field({ nullable: true })
    country?: NewsApiCountries = NewsApiCountries.us;
}

@InputType()
export class GraphQLEverythingQuery implements NewsApiEverythingRequestParams {
    @Field({ nullable: true })
    query?: string;
    @Field({ nullable: true })
    searchIn?: NewsApiSearchIn;
    @Field({ nullable: true })
    sources?: string;
    @Field({ nullable: true })
    domains?: string;
    @Field({ nullable: true })
    excludeDomains?: string;
    @Field({ nullable: true })
    from?: Date;
    @Field({ nullable: true })
    to?: Date;
    @Field({ nullable: true })
    language?: NewsApiLanguages = NewsApiLanguages.en;
    @Field({ nullable: true })
    sortBy?: NewsApiSortBy;
    @Field({ nullable: true })
    pageSize!: number;
    @Field({ nullable: true })
    page!: number;
}

@InputType()
export class GraphQLTopHeadlinesQuery implements NewsApiTopHeadlineRequestParams {
    @Field({ nullable: true })
    sources?: string;
    @Field({ nullable: true })
    query?: string;
    @Field({ nullable: true })
    category?: NewsApiCategories = NewsApiCategories.general;
    @Field({ nullable: true })
    country?: NewsApiCountries = NewsApiCountries.us;
    @Field({ nullable: true })
    pageSize!: number;
    @Field({ nullable: true })
    page!: number;
}

@ObjectType()
class GraphQLSource implements NewsApiSource {
    @Field({ nullable: false })
    id!: string;
    @Field({ nullable: false })
    name!: string;
    @Field({ nullable: false })
    description!: string;
    @Field({ nullable: false })
    url!: string;
    @Field({ nullable: false })
    category!: string;
}

@ObjectType()
class GraphQLEverythingSource implements NewsApiArticleSource {
    @Field({ nullable: true })
    id: string;
    @Field({ nullable: true })
    name: string;
}

@ObjectType()
class GraphQLEverything implements NewsApiArticle {
    @Field(() => GraphQLEverythingSource, { nullable: false })
    source!: NewsApiArticleSource;
    @Field({ nullable: true })
    author?: string;
    @Field({ nullable: false })
    title!: string;
    @Field({ nullable: true })
    description?: string;
    @Field({ nullable: true })
    url?: string;
    @Field({ nullable: true })
    urlToImage?: string;
    @Field({ nullable: false })
    publishedAt!: string;
    @Field({ nullable: true })
    content?: string;
}

@ObjectType()
export class GraphQLTopHeadlinesResponse {
    @Field(() => [GraphQLEverything], { nullable: false })
    articles!: NewsApiArticle[];
    @Field(() => GraphQLPageInfo, { nullable: false })
    pagination!: GraphQLPageInfo;
    @Field({ nullable: false })
    totalResults!: number;
}

@ObjectType()
export class GraphQLSourcesResponse {
    @Field(() => [GraphQLSource], { nullable: false })
    sources!: NewsApiSource[];
    @Field({ nullable: false })
    totalResults!: number;
}

@ObjectType()
export class GraphQLEverythingResponse {
    @Field(() => [GraphQLEverything], { nullable: false })
    articles!: NewsApiArticle[];
    @Field(() => GraphQLPageInfo, { nullable: false })
    pagination!: GraphQLPageInfo;
    @Field({ nullable: false })
    totalResults!: number;
}
