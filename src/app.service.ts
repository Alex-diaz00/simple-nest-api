import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Go to scraping/rates to get the exchange rates';
  }
}
