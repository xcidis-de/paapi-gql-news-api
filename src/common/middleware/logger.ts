import { ConsoleLogger, Injectable, NestMiddleware } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class LoggerMiddleware extends ConsoleLogger implements NestMiddleware {
  private enabled: boolean;
  constructor(private configService: ConfigService) {
    super();
    this.enabled = configService.get('environment') === 'development';
  }
  use(req: any, res: any, next: (error?: Error | any) => void) {
    if (!this.enabled) {
      console.log(req.body);
      console.log(res.body);
      next();
    } else {
      next();
    }
  }
}