import { Component, OnInit } from '@angular/core';
import { APIService } from '../service/api.service';

@Component({
  selector: 'app-teachers-info',
  templateUrl: './teachers-info.component.html',
  styleUrls: ['./teachers-info.component.css']
})
export class TeachersInfoComponent implements OnInit {
  dataList: any;
  baseUrl: string = '';
  dataInfo: any = {
    Name: '',
    Designation: '',
    Qualification: '',
    DOB: '2022-11-10',
    DOA: '2022-11-10',
    Trained: 'Trained',
    Probation: 'Confirmed'
  }
  constructor(private config: APIService) { }

  ngOnInit(): void {
    console.log(new Date())
    this.GetTeachersInfo();
  }
  InsertTeachersInfo() {
    const objBO = {
      url: 'api/data/InsertUpdateDataInfo',
      Name: this.dataInfo.Name,
      Class: this.dataInfo.Designation,
      Section: this.dataInfo.Qualification,
      Session: this.dataInfo.Session,
      from: this.dataInfo.DOB,
      to: this.dataInfo.DOA,
      Prm1: this.dataInfo.Trained,
      Prm2: this.dataInfo.Probation,
      Logic: 'InsertTeachersInfo'
    }
    this.config.post(objBO).subscribe(data => {
      alert(data);
      this.GetTeachersInfo();
      this.dataInfo={
        Name: '',
        Designation: '',
        Qualification: '',
        DOB: '2022-11-10',
        DOA: '2022-11-10',
        Trained: 'Trained',
        Probation: 'Probation'
      }
    });
  }
  GetTeachersInfo() {
    const objBO = {
      url: 'api/data/DataQueries',
      AutoId: 0,
      from: '1900/01/01',
      to: '1900/01/01',
      Logic: 'GetTeachersInfo'
    };
    this.config.post(objBO).subscribe(data => {
      this.dataList = data.ResultSet.Table;
    });
  }
  DeleteTeacher(id: any) {
    if (confirm('Are you sure to delete?')) {
      const objBO = {
        url: 'api/data/InsertUpdateDataInfo',
        AutoId: id,
        from: '1900/01/01',
        to: '1900/01/01',
        Logic: 'DeleteTeacher',
      };
      this.config.post(objBO).subscribe(data => {
        if (data.includes('Success')) {
          this.GetTeachersInfo();
        }
        else {
          alert(data);
        }
      });
    }
  }
}
