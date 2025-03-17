import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent implements OnInit {
  formInfo: any = {
    Class: 'Select Class',
    StudentName: '',
    FatherName: '',
    MotherName: '',
    Mobile: '',
    Email: '',
    PreviousSchoolName: '',
    PreviousClassName: '',
    ResidentialAddress: ''
  }
  constructor(private _config:ApiService) { }

  ngOnInit(): void {
  }
  InsertAdmission() {
    const objBO = {
      url: 'api/data/InsertUpdateDataInfo',
      AutoId: 0,
      Class: this.formInfo.Class,
      Name: this.formInfo.StudentName,
      FatherName: this.formInfo.FatherName,
      MotherName: this.formInfo.MotherName,
      Mobile: this.formInfo.Mobile,
      Email: this.formInfo.Email,
      from: '1900/01/01',
      to: '1900/01/01',
      Prm1: this.formInfo.PreviousSchoolName,
      Prm2: this.formInfo.PreviousClassName,
      Prm3: this.formInfo.ResidentialAddress,
      Logic: 'InsertAdmission',
    }
    this._config.post(objBO).subscribe(res => {
      if (res.includes('Success')) {
        alert('Successfully Submitted Details.')
        this.formInfo = {};       
      }
      else {
        alert(res);
      }
    })
  }
}
