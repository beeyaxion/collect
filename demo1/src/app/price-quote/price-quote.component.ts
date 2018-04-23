import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-price-quote',
  templateUrl: './price-quote.component.html',
  styleUrls: ['./price-quote.component.css']
})
export class PriceQuoteComponent implements OnInit {

  stockCoe = 'IBM';
  price: number;

  @Output()
  lastPrice: EventEmitter<PriceQuote> = new EventEmitter<PriceQuote>();

  @Output()
  bug: EventEmitter<PriceQuote> = new EventEmitter<PriceQuote>();

  constructor() {
    setInterval(() => {
      let priceQuote: PriceQuote = new PriceQuote(this.stockCoe, 100 * Math.random());
      this.price = priceQuote.lastPrice;

    }, 1000);

  }

  bugStock(event) {

    this.bug.emit(new PriceQuote(this.stockCoe, this.price));
  }

  ngOnInit() {
  }

}

export class PriceQuote {
  constructor(public stockCode: string,
              public lastPrice: number) {
  }

}
