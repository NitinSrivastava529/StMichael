import { Component, OnInit } from '@angular/core';
import { APIService } from '../service/api.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  EventInfo:any;
  IsActive:boolean=true;
  constructor(private config: APIService) { }

  ngOnInit(): void {
    this.GetEvent();
  }
  GetEvent() {
    const objBO = {      
      url: 'api/data/DataQueries',
      AutoId: 0,
      from: '1900/01/01',
      to: '1900/01/01',
      Logic: 'GetEvent'
    };
    this.config.post(objBO).subscribe(data => {
      this.EventInfo = data.ResultSet.Table;
    });
  }

  DeleteEvent(id: any) {
    if (confirm('Are you sure to delete?')) {
      const objBO = {
        url: 'api/data/InsertUpdateDataInfo',
        AutoId: id,        
        from: '1900/01/01',
        to: '1900/01/01',
        Logic: 'DeleteEvent'
      };
      this.config.post(objBO).subscribe(data => {
        if (data.includes('Success')) {         
          this.GetEvent();
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
      Logic: 'InsertEvent'
    };
    this.config.post(objBO).subscribe(data => {
      if (data.includes('Success')) {       
        this.GetEvent();
      }
      else {
        alert(data);
      }
    });
  }
}
