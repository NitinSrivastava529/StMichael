import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {
  facultyList:any;
  constructor(private _config:ApiService) { }

  ngOnInit(): void {
    this.GetFaculty();
  }
  GetFaculty() {
    const objBO = {
      url: 'api/data/DataQueries',
      AutoId: 0,
      from: '1900/01/01',
      to: '1900/01/01',
      Logic: 'GetTeachersInfo'
    };
    this._config.post(objBO).subscribe(data => {
      this.facultyList = data.ResultSet.Table;
    });
  }
}
