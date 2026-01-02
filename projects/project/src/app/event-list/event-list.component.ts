import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  EventInfo: any;
  largePhoto: any;
  IsShowImg: any;
  baseUrl:string='';
  IsShow = false;
  route=inject(Router);
  constructor(private _config: ApiService) {
    this._config.loadScript();
    this.baseUrl=this._config.baseUrl;
  }

  ngOnInit(): void {
    this.GalleryEvent();
  }
  showPhoto(url: string) {
    this.IsShowImg = url;
    this.IsShow = true;
  }
  GalleryEvent() {
    const objBO = {
      url: 'api/data/DataQueries',
      AutoId: 0,
      from: '1900/01/01',
      to: '1900/01/01',
      Logic: 'GalleryEvent'
    };
    this._config.post(objBO).subscribe(data => {
      this.EventInfo = data.ResultSet.Table;
    });
  }

}

