import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product, ProductService} from '../shared/product.service';
import {Comment} from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  comments: Comment[];
  newRating: number = 5;
  newComment: string = '';

  isCommentHidden = true;

  constructor(private routeInfo: ActivatedRoute,
              private productService: ProductService) {
  }

  ngOnInit() {
    let productId: number = this.routeInfo.snapshot.params['productId'];
    // this.product = this.productService.getProduct(productId);
    // 手工订阅
    this.productService.getProduct(productId).subscribe(
      product => this.product = product
  )
    ;
    // this.comments = this.productService.getCommentsForProductId(productId);
    // 手工订阅
    this.productService.getCommentsForProductId(productId).subscribe(
      comments => this.comments=comments
    );
  }

  addComment() {
    let comment = new Comment(0, this.product.id, new Date().toISOString(), 'someone', this.newRating, this.newComment);
    this.comments.unshift(comment);


    let sum = this.comments.reduce((sum, comment) => sum + comment.rating, 0);
    this.product.rating = sum / this.comments.length;

    this.newComment = null;
    this.newRating = 5;
    this.isCommentHidden = true;
  }
}
