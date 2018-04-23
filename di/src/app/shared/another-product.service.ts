import {Injectable} from '@angular/core';
import {Product, ProductService} from './product.service';
import {LoggerService} from './logger.service';

@Injectable()
export class AnotherProductService implements ProductService {

  constructor(public logger: LoggerService) {
  }
  getProduct(): Product {
    return new Product(1, 'sumsung', 4899, '三星手机最新款');
  }


}
