import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})

export class PhotoGalleryComponent implements OnInit {
  EventInfo: any;
  GalleryInfo: any;
  largePhoto: any;
  IsShowImg: any;
  selectedEvent: string = '';
  baseUrl: string = '';
  IsShow = false;
  constructor(private _config: ApiService) {
    this._config.loadScript();
    this.baseUrl = this._config.baseUrl;
  }
  private route = inject(ActivatedRoute);
  ngOnInit(): void {
    this.selectedEvent=this.route.snapshot.queryParamMap.get('id') || "ALL";
    this.GetGallery(this.route.snapshot.queryParamMap.get('id') || "ALL");
  }
  showPhoto(url: string) {  
    this.IsShowImg = url;
    this.IsShow = true;
  }
  GetGallery(event: string) {
    const objBO = {
      url: 'api/data/DataQueries',
      AutoId: 0,
      from: '1900/01/01',
      to: '1900/01/01',
      Prm1: event,
      Logic: 'GetGalleryByEvent'
    };
    this._config.post(objBO).subscribe(data => {
      this.GalleryInfo = data.ResultSet.Table;
    });
  }

}
