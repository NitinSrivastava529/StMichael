import { Component, OnInit } from '@angular/core';
import { APIService } from '../service/api.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  NotificationInfo:any;
  IsActive:boolean=true;
  constructor(private config: APIService) { }

  ngOnInit(): void {
    this.GetNotification();
  }
  GetNotification() {
    const objBO = {      
      url: 'api/data/DataQueries',
      AutoId: 0,
      from: '1900/01/01',
      to: '1900/01/01',
      Logic: 'GetNotification'
    };
    this.config.post(objBO).subscribe(data => {
      this.NotificationInfo = data.ResultSet.Table;
    });
  }

  DeleteNotification(id: any) {
    if (confirm('Are you sure to delete?')) {
      const objBO = {
        url: 'api/data/InsertUpdateDataInfo',
        AutoId: id,        
        from: '1900/01/01',
        to: '1900/01/01',
        Logic: 'DeleteNotification'
      };
      this.config.post(objBO).subscribe(data => {
        if (data.includes('Success')) {         
          this.GetNotification();
        }
        else {
          alert(data);
        }
      });
    }
  }
  Save(data: any) {
    const objBO = {
      url: 'api/data/InsertUpdateDataInfo',
      AutoId: 0,
      from: '1900/01/01',
      to: '1900/01/01',
      Prm1: data,
      Logic: 'InsertNotification'
    };
    this.config.post(objBO).subscribe(data => {
      if (data.includes('Success')) {       
        this.GetNotification();
      }
      else {
        alert(data);
      }
    });
  }
}
