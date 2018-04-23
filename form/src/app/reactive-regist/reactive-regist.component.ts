import {Component, OnInit} from '@angular/core';
import {Form, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {equalValidator, mobileAsyncValidator, mobileValidator} from '../validator/validators';

@Component({
  selector: 'app-reactive-regist',
  templateUrl: './reactive-regist.component.html',
  styleUrls: ['./reactive-regist.component.css']
})
export class ReactiveRegistComponent implements OnInit {
  formModel: FormGroup;


  // 方法一
  // constructor() {
  //   this.formModel = new FormGroup({
  //     username: new FormControl(),
  //     mobile: new FormControl(),
  //     passwordsGroup: new FormGroup({
  //       password: new FormControl(),
  //       pconfirm: new FormControl(),
  //     }),
  //   })
  //   ;
  // }
  // 方法二
  constructor(fb: FormBuilder) {
    this.formModel = fb.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      mobile: ['', mobileValidator, mobileAsyncValidator],
      passwordsGroup: fb.group({
        password: ['', Validators.required],
        pconfirm: [''],
      }, {validator: equalValidator}),
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.formModel.valid) {
      console.log(this.formModel.value);
    }

  }

}
