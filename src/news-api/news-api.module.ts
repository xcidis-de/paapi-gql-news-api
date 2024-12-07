
import { Module } from '@nestjs/common';
import { NewsApiResolver } from './news-api.resolver';
import { NewsApiLibService, NewsApiLibServiceModule } from 'news-api-ts';
import { NewsApiRepository } from './news-api.repository';
import { ConfigService } from '@nestjs/config';
import { NewsApiService } from './news-api.service';


@Module({
  imports: [
    NewsApiLibServiceModule,
  ],
  providers: [
    NewsApiResolver, 
    NewsApiService,
    NewsApiLibService,
    NewsApiRepository, 
    ConfigService
  ],
  exports: [
    NewsApiResolver,
  ],
})
export class NewsApiModule {}