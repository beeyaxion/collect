import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BindComponent } from './bind/bind.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MultiplePipe } from './pipe/multiple.pipe';
import { OrderComponent } from './order/order.component';
import { PriceQuoteComponent } from './price-quote/price-quote.component';
import { LifeComponent } from './life/life.component';
import { ChildComponent } from './child/child.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';


@NgModule({
  declarations: [
    AppComponent,
    BindComponent,
    MultiplePipe,
    OrderComponent,
    PriceQuoteComponent,
    LifeComponent,
    ChildComponent,
    Child1Component,
    Child2Component
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
