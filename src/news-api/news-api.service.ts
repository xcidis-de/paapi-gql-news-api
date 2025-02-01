import { Injectable } from "@nestjs/common";
import { NewsApiEverythingRequestParams, NewsApiLibService, NewsApiQueryResponse, NewsApiSourcesResponse, NewsApiTopHeadlineRequestParams } from 'news-api-ts';
import { GraphQLEverythingResponse, GraphQLSourcesResponse, GraphQLTopHeadlinesResponse } from "./news-api.models";
import { NewsApiRepository } from "./news-api.repository";

@Injectable()
export class NewsApiService {
    constructor(
        private newsApiLib: NewsApiLibService,
        private newsApiRepo: NewsApiRepository
    ) {}

    async getTopHeadlines(
        filter: NewsApiTopHeadlineRequestParams
    ): Promise<GraphQLTopHeadlinesResponse> {
        const response: NewsApiQueryResponse = {
            "status": "200",
            "articles": [
                        {
                            "description": "Meta Platforms, Inc. (Nasdaq: META) today reported financial results for the quarter and full year ended December 31, 2024. \"We continue to make good progress on AI, glasses, and the future of social media,\" said Mark Zuckerberg, Meta founder and CEO. \"I'm ex…",
                            "url": "https://investor.atmeta.com/investor-news/press-release-details/2025/Meta-Reports-Fourth-Quarter-and-Full-Year-2024-Results/default.aspx",
                            "title": "Meta Reports Fourth Quarter and Full Year 2024 Results - Meta Investor Relations",
                            "source": {
                                "name": "Atmeta.com",
                                "id": null
                            },
                            "author": null,
                            "urlToImage": "https://s21.q4cdn.com/399680738/files/design/2022/Meta_Symbol_PositivePrimary_RGB-(2).png",
                            "publishedAt": "2025-01-29T21:42:42Z"
                        },
                        {
                            "description": "Tesla's full-year profits were down 40% in 2024 from 2022's record.",
                            "url": "https://www.forbes.com/sites/dereksaul/2025/01/29/tesla-earnings-stock-slips-as-revenue-sales-fall-short-of-estimates/",
                            "title": "Tesla Earnings: Stock Slips As Revenue, Sales Fall Short Of Estimates - Forbes",
                            "source": {
                                "name": "Forbes",
                                "id": null
                            },
                            "author": "Derek Saul",
                            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/679a5c34a4a3e4c1aece64af/0x0.jpg?format=jpg&crop=3106,1748,x0,y0,safe&height=900&width=1600&fit=bounds",
                            "publishedAt": "2025-01-29T21:14:00Z"
                        },
                        {
                            "description": "Man City to face Real Madrid or Bayern Munich in play-offs A massive showdown awaits as Manchester City are set to face either Real Madrid or Bayern M",
                            "url": "https://www.marca.com/en/football/champions-league/2025/01/29/679a25bc7aeb1c2f75dd389e-live.html",
                            "title": "Champions League 2024/25 Matchday 8 LIVE: City scores... but would still be eliminated - Marca English",
                            "source": {
                                "name": "Marca",
                                "id": "marca"
                            },
                            "author": "SAM",
                            "urlToImage": "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2025/01/29/17381555488325.jpg",
                            "publishedAt": "2025-01-29T21:13:13Z"
                        },
                        {
                            "description": null,
                            "url": "https://abcnews.go.com/US/bob-menendez-sentencing-corruption-case/story?id\\\\u003d118186976",
                            "title": "Former Sen. Bob Menendez sentenced to 11 years in prison on corruption charges - ABC News",
                            "source": {
                                "name": "ABC News",
                                "id": "abc-news"
                            },
                            "author": "ABC News",
                            "urlToImage": null,
                            "publishedAt": "2025-01-29T21:11:14Z"
                        },
                        {
                            "description": "President Donald Trump on Wednesday signed a memorandum directing the federal government to prepare the US Naval base at Guantanamo Bay, Cuba, to house tens of thousands of migrants.",
                            "url": "https://www.cnn.com/2025/01/29/politics/guantanamo-bay-trump-migrants/index.html",
                            "title": "Trump says he’s ordering Guantanamo Bay to be prepared to host up to 30,000 migrants - CNN",
                            "source": {
                                "name": "CNN",
                                "id": "cnn"
                            },
                            "author": "Michael Williams, Haley Britzky",
                            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-92550868.jpg?c=16x9&q=w_800,c_fill",
                            "publishedAt": "2025-01-29T21:04:00Z"
                        }
                    ],
                    "totalResults": 36
                }
        this.newsApiRepo.saveHeadlines(response);

        return {
            articles: response.articles,
            pagination: {
                pageSize: response.articles.length,
                page: filter.page ? filter.page : 1
            },
            totalResults: response.totalResults,
        }
    }

    async getEverything(
        filter: NewsApiEverythingRequestParams
    ): Promise<GraphQLEverythingResponse> {
        const response: NewsApiQueryResponse = await this.newsApiLib.getEverything(filter);

        return {
            articles: response.articles,
            pagination: {
                pageSize: response.articles.length,
                page: filter.page
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
