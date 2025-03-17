import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  ipVideo:any;
  constructor(private _config:ApiService,private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    this.getAllVideo();
  }
  getUrl(url:any){    
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  getAllVideo(){
    const objBO = {
      url: 'api/data/DataQueries',
      AutoId: 0,
      from: '1900/01/01',
      to: '1900/01/01',
      Logic: 'GetVideo'
    };
    this._config.post(objBO).subscribe(data => {
      this.ipVideo = data.ResultSet.Table;
    });
  }

}
