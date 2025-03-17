import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  IsGallery: boolean = false;
  GalleryInfo: any;
  NewsInfo: any;
  baseUrl: string = '';
  localGalleryList=['1 (1).jpeg','1 (2).jpeg','1 (3).jpeg','1 (4).jpeg','1 (5).jpeg','1 (6).jpeg','1 (7).jpeg','1 (8).jpeg']
  constructor(private _config: ApiService) { }
  ngOnInit(): void {
    this._config.loadScript(); this.baseUrl = this._config.baseUrl;
    this.GetGallery(); 
    this.GetNews(); 
    this.IsGallery = true;
  }  
  GetGallery() {
    const objBO = {
      url: 'api/data/DataQueries',
      AutoId: 0,
      from: '1900/01/01',
      to: '1900/01/01',
      Logic: 'GetGallery'
    };
    this._config.post(objBO).subscribe(data => {
      this.GalleryInfo = data.ResultSet.Table;      
    });
  }
  GetNews() {
    const objBO = {
      url: 'api/data/DataQueries',
      AutoId: 0,
      from: '1900/01/01',
      to: '1900/01/01',
      Logic: 'GetNews'
    };
    this._config.post(objBO).subscribe(data => {
      console.log(data)
      this.NewsInfo = data.ResultSet.Table;
    });
  }
}
