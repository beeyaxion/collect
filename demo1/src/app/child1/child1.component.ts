import {AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit, AfterViewInit, AfterViewChecked {

  constructor() {
  }

  ngOnInit() {
  }

  greeting(name: string) {
    console.log(name);
  }

  ngAfterViewInit(): void {
    console.log('子组件的视图初始化');
  }

  ngAfterViewChecked(): void {
    console.log('子组件的视图变更检查');
  }
}
