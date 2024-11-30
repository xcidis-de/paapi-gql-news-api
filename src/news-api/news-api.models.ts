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
    @Field()
    id!: string;
    @Field()
    name!: string;
    @Field()
    description!: string;
    @Field()
    url!: string;
    @Field()
    category!: string;
}

@ObjectType()
export class GraphQLEverythingSource implements NewsApiArticleSource {
    @Field()
    id!: string;
    @Field()
    name!: string;
}

@ObjectType()
export class GraphQLEverything implements NewsApiArticle {
    @Field(type => GraphQLEverythingSource)
    source!: NewsApiArticleSource;
    @Field()
    author!: string;
    @Field()
    title!: string;
    @Field()
    description!: string;
    @Field()
    url?: string;
    @Field()
    urlToImage?: string;
    @Field()
    publishedAt!: string;
    @Field()
    content!: string;
}