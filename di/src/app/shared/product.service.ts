import {Injectable} from '@angular/core';
import {LoggerService} from './logger.service';

@Injectable()
export class ProductService {

  constructor(public logger: LoggerService) {
  }

  getProduct(): Product {
    this.logger.log('getProduct method');
    return new Product(0, 'iPhone', 5899, '苹果手机最新款');
  }

}

export class Product {
  constructor(public id: number,
              public  title: string,
              public price: number,
              public desc: string) {
  }
}
