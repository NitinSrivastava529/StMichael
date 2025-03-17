import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from '../service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: any = '';
  password: any = '';
  logo: any;  
  constructor(private _config: APIService, private route: Router) { }

  ngOnInit(): void {
    this.logo=this._config.rootUrl+'assets/logo.png';
  }
  login() {
    if (this.username == 'admin' && this.password == 'admin@admin') {      
        this._config.Login();    
    }
    else {
      alert('Incorrect Username or Password!');
    }
  }
}
