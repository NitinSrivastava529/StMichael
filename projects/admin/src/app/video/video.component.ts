import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { APIService } from '../service/api.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  VideoInfo: any;
  constructor(private config: APIService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.GetVideo();
  }
  getUrl(url: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  GetVideo() {
    const objBO = {
      url: 'api/data/DataQueries',
      AutoId: 0,
      from: '1900/01/01',
      to: '1900/01/01',
      Logic: 'GetVideo'
    };
    this.config.post(objBO).subscribe(data => {
      this.VideoInfo = data.ResultSet.Table;
    })
  }
  Save(data: any) {
    const objBO = {
      url: 'api/data/InsertUpdateDataInfo',
      AutoId: 0,
      from:'1900/01/01',
      to:'1900/01/01',
      Prm1: data,
      Logic: 'InsertVideo',
    };
    this.config.post(objBO).subscribe(data => {
      if (data.includes('Success')) {       
        this.GetVideo();
      }
      else {
        alert(data);
      }
    });
  }
  DeleteVideo(id: any) {
    if (confirm('Are you sure to delete?')) {
      const objBO = {
        url: 'api/data/InsertUpdateDataInfo',
        AutoId: id,
        from:'1900/01/01',
        to:'1900/01/01',
        Logic: 'DeleteVideo',
      };
      this.config.post(objBO).subscribe(data => {
        if (data.includes('Success')) {
          this.GetVideo();
        }
        else {
          alert(data);
        }
      });
    }
  }
}
