import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {FormControl} from '@angular/forms';
import 'rxjs/Rx';


@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {

  birthday = new Date();
  searchInput: FormControl = new FormControl();
  pi = 3.141592653;
  /*name: string;*/

  /* divClass: any = {
     a: false,
     b: false,
     c: false
   };*/

  constructor() {
    this.searchInput.valueChanges
      .debounceTime(500)
      .subscribe( stockCode => this.getStockInfo(stockCode));


    /*Observable.from([1, 2, 3, 4])
      .filter(e => e % 2 == 0)
      .map(e => e * e)
      .subscribe(
        e => console.log(e),
        err => console.error(err),
        () => console.log('end')
      );*/

    /*setTimeout(() => {
     this.divClass = {
       a: true,
       b: true,
       c: true
     };
    }, 3000);*/

    /*setTimeout(() => {
      this.name = 'Tom';
    }, 3000);*/
  }

  ngOnInit() {
  }

  /*  doOnClick(event: any) {
      console.log(event);
    }*/

  /*doOnInput(event: any) {
    /!*console.log(event.target.value);
    console.log(event.target.getAttribute('value'));*!/
    this.name = event.target.value;
  }*/
  onKey(message: string) {
    console.log(message);
  }

  private getStockInfo(value: string) {
    console.log(value);
  }
}
