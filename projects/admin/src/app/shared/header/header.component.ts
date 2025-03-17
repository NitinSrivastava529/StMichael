import { Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from '../../service/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
logo:any;
  constructor(private config:APIService,private router:Router) { }

  ngOnInit(): void {
    this.config.loadScript();
    this.logo=this.config.rootUrl+'assets/logo.png';
  }
  logout(){
    if (confirm('Are you sure to Logout?')) {      
     this.config.Logout()
  }   
  }
}
