import {EventEmitter, Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class ProductService {

  searchEvent: EventEmitter<ProductSearchParams> = new EventEmitter<ProductSearchParams>();

  constructor(private http: Http) {
  }

  getAllCategories() {
    return ['电子', '图书', '游戏'];
  }

  getProducts(): Observable<Product []> {
    return this.http.get('/api/products/').map((res) => res.json());
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get('/api/product/' + id).map((res) => res.json());
  }

  getCommentsForProductId(id: number): Observable<Comment[]> {
    return this.http.get('/api/product/' + id + '/comments').map((res) => res.json());
  }

  search(params: ProductSearchParams): Observable<Product[]> {
    return this.http.get('/api/products?title=dddd&&price=3', {search: this.encodeParams(params)}).map((res) => res.json());
  }

  private encodeParams(params: ProductSearchParams): URLSearchParams {
    return Object.keys(params)
      .filter(key => params[key])
      .reduce((sum: URLSearchParams, key: string) => {
        sum.append(key, params[key]);
        return sum;
      }, new URLSearchParams());
  }
}

export class ProductSearchParams {
  constructor(public title: string,
              public price: number,
              public category: string) {
  }
}

export class Product {

  constructor(public id: number,
              public title: string,
              public price: number,
              public rating: number,
              public desc: string,
              public categories: Array<string>) {

  }
}


export class Comment {
  constructor(public id: number,
              public productId: number,
              public timestamp: string,
              public user: string,
              public rating: number,
              public context: string) {
  }
}
