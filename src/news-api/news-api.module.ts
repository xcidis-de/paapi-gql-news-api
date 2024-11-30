
import { Module } from '@nestjs/common';
import { NewsApiEverythingResolver, NewsApiSourceResolver } from './news-api.resolver';
import { NewsApiService, NewsApiServiceModule } from 'news-api-ts';
import { NewsApiRepository } from './news-api.repository';
import { ConfigService } from '@nestjs/config';


@Module({
  imports: [
    NewsApiServiceModule
  ],
  providers: [
    NewsApiEverythingResolver, 
    NewsApiSourceResolver, 
    NewsApiService, 
    NewsApiRepository, 
    ConfigService
  ],
  exports: [
    NewsApiEverythingResolver,
    NewsApiSourceResolver
  ],
})
export class NewsApiModule {}