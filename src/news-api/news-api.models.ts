import { Field, InputType, ObjectType } from '@nestjs/graphql';

import { 
    NewsApiArticle,
    NewsApiArticleSource,
    NewsApiCountries,
    NewsApiEverythingRequestParams,
    NewsApiSearchIn, 
    NewsApiSource,
    NewsApiSourcesRequestParams, 
    NewsApiTopHeadlineRequestParams
} from 'news-api-ts';


@InputType()
export class GraphQLSourceQuery implements NewsApiSourcesRequestParams {
    @Field({ nullable: true })
    category?: string;
    @Field({ nullable: true })
    language?: string;
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
    language?: string;
    @Field({ nullable: true })
    sortBy?: string;
    @Field({ nullable: true })
    pageSize?: number;
    @Field({ nullable: true })
    page?: number;
}

@InputType()
export class GraphQLTopHeadlinesQuery implements NewsApiTopHeadlineRequestParams {
    @Field({ nullable: true })
    sources?: string;
    @Field({ nullable: true })
    q?: string;
    @Field({ nullable: true })
    category?: string;
    @Field({ nullable: true })
    country?: NewsApiCountries = NewsApiCountries.us;
    @Field({ nullable: true })
    pageSize?: number;
    @Field({ nullable: true })
    page?: number;
}

@ObjectType()
export class GraphQLSource implements NewsApiSource {
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
export class GraphQLEverythingSource implements NewsApiArticleSource {
    @Field({ nullable: false })
    id!: string;
    @Field({ nullable: false })
    name!: string;
}

@ObjectType()
export class GraphQLEverything implements NewsApiArticle {
    @Field(() => GraphQLEverythingSource, { nullable: false })
    source!: NewsApiArticleSource;
    @Field({ nullable: false })
    author!: string;
    @Field({ nullable: false })
    title!: string;
    @Field({ nullable: false })
    description!: string;
    @Field({ nullable: true })
    url?: string;
    @Field({ nullable: true })
    urlToImage?: string;
    @Field({ nullable: false })
    publishedAt!: string;
    @Field({ nullable: false })
    content!: string;
}