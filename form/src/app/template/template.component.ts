import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit(value: any, valid: boolean) {

    console.log(valid);
    if (!value) {
      console.log(value);
    }
    else {
      console.log('表单value是空。');
    }

  }
}
