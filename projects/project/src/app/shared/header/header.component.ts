import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  notification: string = ''
  constructor(private _config: ApiService) { }

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
    }
    this._config.post(objBO).subscribe(res => {
      this.notification = res.ResultSet.Table[0].Notification;
    })
  }

}
