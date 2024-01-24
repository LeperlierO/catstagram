import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  loginForm : FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router){
    this.loginForm = this.fb.group({
      'username' : ['', [Validators.required]],
      'password' : ['', [Validators.required]]
    })
  }

  ngOnInit(){

  }

  login(){
    this.authService.login(this.loginForm.value).subscribe(data => {
      this.authService.saveToken(data);
      this.router.navigate(['cats']);
    });
  }

  get username(){
    return this.loginForm.get('username');
  } 

  get password(){
    return this.loginForm.get('password');
  } 

}
