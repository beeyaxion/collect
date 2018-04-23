import {AfterViewChecked, AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {PriceQuote} from './price-quote/price-quote.component';
import {Child1Component} from './child1/child1.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, AfterViewChecked {

  title = 'ttttt';
  message: string;

  @ViewChild('child1')
  child1: Child1Component;
  divContent: string = '<div>mokewang</div>';
  // title = 'Tom';

  stock = '';
  priceQuote: PriceQuote = new PriceQuote('', 0);

  greeting: string = 'Hello';
  user: { name: string } = {name: 'Tom'};

  bugHandler(event: PriceQuote) {
    this.priceQuote = event;
  }

  ngOnInit(): void {
    setInterval(() => {
      this.child1.greeting('Tom');
    }, 5000);

  }

  ngAfterViewInit(): void {
    console.log('父组件的视图初始化');
    setInterval(() => {
      this.message = 'test';
    }, 0);


  }

  ngAfterViewChecked(): void {
    console.log('父组件的视图变更检查');
  }


}
