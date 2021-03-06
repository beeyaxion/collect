import {Component, OnInit} from '@angular/core';
import {Product, ProductService} from '../shared/product.service';
import {FormControl} from '@angular/forms';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Observable<Product[]>;

  private imgUrl = 'http://via.placeholder.com/320x150';

  // 右边搜索功能
  // private titleFilter: FormControl = new FormControl();
  // keyword: string;

  constructor(private productService: ProductService) {
    // 右边搜索功能
    // this.titleFilter.valueChanges
    //   .debounceTime(500)
    //   .subscribe(value => {
    //     this.keyword = value;
    //   });

  }

  ngOnInit() {
    this.products = this.productService.getProducts();

    this.productService.searchEvent.subscribe(
      params => this.products = this.productService.search(params)
    );
  }

}
