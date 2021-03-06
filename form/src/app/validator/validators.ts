import {FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
/*手机号码校验*/
export  function mobileValidator(control: FormControl): any {
  var myreg = /^1[3|4|5|8][0-9]\d{4,8}$/;
  let valid = myreg.test(control.value);
  console.log('mobile的校验结果是：' + valid);
  return valid ? null : {mobile: true};
}

/*异步校验器*/
export  function mobileAsyncValidator(control: FormControl): any {
  var myreg = /^1[3|4|5|8][0-9]\d{4,8}$/;
  let valid = myreg.test(control.value);
  console.log('mobile的校验结果是：' + valid);
  return Observable.of( valid ? null : {mobile: true}).delay(5000);
}

/*密码校验*/
export  function  equalValidator(group: FormGroup): any {
  let password: FormControl = group.get('password') as FormControl;
  let pconfirm: FormControl = group.get('pconfirm') as FormControl;
  let valid: boolean = (password.value == pconfirm.value);
  console.log('密码校验结果' + valid);
  return valid ? null : {equal: {descxxx: '密码和确认密码不一致.'}};
}
