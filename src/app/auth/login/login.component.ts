import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(public authService:AuthService){}

  isLoading = false

  onLogin(form:NgForm){
    if(form.invalid){
      return
    }

    const {username, email, password} = form.value

    this.authService.login(username, email, password)
  }

}
