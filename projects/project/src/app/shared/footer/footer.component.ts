import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  rootUrl:string='';
  constructor(private _config:ApiService) { }

  ngOnInit(): void {
    this.rootUrl=this._config.rootUrl;
  }

}
