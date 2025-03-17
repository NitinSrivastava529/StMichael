import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './toppers.component.html',
  styleUrls: ['./toppers.component.css']
})

export class ToppersComponent implements OnInit {
  TopperInfo: any;
  largePhoto: any;
  IsShowImg: any;
  baseUrl:string='';
  IsShow = false;
  constructor(private _config: ApiService) {
    this._config.loadScript();
    this.baseUrl=this._config.baseUrl;
  }

  ngOnInit(): void {
    this.GetTopperInfo();
  }
  showPhoto(url: string) {
    this.IsShowImg = url;
    this.IsShow = true;
  }
  GetTopperInfo() {
    const objBO = {
      url: 'api/data/DataQueries',
      AutoId: 0,
      from: '1900/01/01',
      to: '1900/01/01',
      Logic: 'GetTopperInfo'
    };
    this._config.post(objBO).subscribe(data => {
      this.TopperInfo = data.ResultSet.Table;
    });
  }

}
