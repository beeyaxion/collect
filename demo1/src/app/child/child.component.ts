import {Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck {


  @Input()
  greeting: string;

  @Input()
  user: { name: string };

  message = '初始化消息';

  oldUsername = '';

  changeDetected: boolean = false;

  noChangeCount: number = 0;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(JSON.stringify(changes, null, 2));
  }

  ngDoCheck(): void {
    if (this.user.name !== this.oldUsername) {
      this.changeDetected = true;
      console.log('DoCheck:user.name从' + this.oldUsername + '变为' + this.user.name);
      this.oldUsername = this.user.name;
    }
    if (this.changeDetected) {
      this.noChangeCount = 0;
    }
    else {
      this.noChangeCount++;
      console.log('Docheck:user.name没变化时，已经被调用' + this.noChangeCount + '次');
    }
    this.changeDetected = false;
  }
}
