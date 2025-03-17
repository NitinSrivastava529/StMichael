import { Component, OnInit } from '@angular/core';
import { APIService } from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLogin: boolean = false;
  IsSlide: boolean = true;
  title = 'Admin';
  constructor(private _config:APIService) { }
  ngOnInit(): void {
    this._config.IsAuth.subscribe(res=>{
      this.isLogin=res;      
    })
       
  }
  ToggleSlide() {
    this.IsSlide = !this.IsSlide;
  }
}
