import { Component, OnInit } from '@angular/core';
import { APIService } from '../service/api.service';

@Component({
  selector: 'app-addmission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent implements OnInit {
  AdmissionInfo: any;
  constructor(private config: APIService) { }

  ngOnInit(): void {
    this.GetAdmission();
  }
  GetAdmission() {
    const objBO = {
      url: 'api/data/DataQueries',
      AutoId: 0,
      from: '1900/01/01',
      to: '1900/01/01',
      Logic: 'GetAdmission'
    };
    this.config.post(objBO).subscribe(data => {
      this.AdmissionInfo = data.ResultSet.Table;
    })
  }
  DeleteAdmission(id: any) {
    if (confirm('Are you sure to delete?')) {
      const objBO = {
        url: 'api/data/InsertUpdateDataInfo',
        AutoId: id,
        from: '1900/01/01',
        to: '1900/01/01',
        Logic: 'DeleteAdmission',
      };
      this.config.post(objBO).subscribe(data => {
        if (data.includes('Success')) {
          this.GetAdmission();
        }
        else {
          alert(data);
        }
      });
    }
  }
}
