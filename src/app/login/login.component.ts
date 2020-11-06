import { JSONPlaceholderService } from './../services/jsonplaceholder.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  msg: String;
  isLoginFailed = false;
  hide: boolean;
  constructor(private service: JSONPlaceholderService) {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),

    });
    this.hide = true
   }

  ngOnInit(): void {
  }
login(){
 this.service.login(this.loginForm.value);
}
}
