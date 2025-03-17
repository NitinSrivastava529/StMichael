import { Component, OnInit } from '@angular/core';
import { APIService } from '../service/api.service';

@Component({
  selector: 'app-topper',
  templateUrl: './topper.component.html',
  styleUrls: ['./topper.component.css']
})
export class TopperComponent implements OnInit {
  dataList: any;
  baseUrl: string = '';
  fileToUpload: any;
  inputFile:any;
  dataInfo: any = {
    Name: '',
    Class: '',
    Session: '',
    RollNo: '',
    Percentage: ''
  }
  constructor(private config:APIService){}
  ngOnInit(): void {
    this.baseUrl=this.config.baseUrl;
    this.GetToppersInfo()
  }
  onSelect(event:any){   
    this.fileToUpload = <File>event.target.files[0];   
  }
  GetToppersInfo() {
    const objBO = {
      url: 'api/data/DataQueries',
      AutoId: 0,
      from: '1900/01/01',
      to: '1900/01/01',
      Logic: 'GetTopperInfo'
    };
    this.config.post(objBO).subscribe(data => {
      this.dataList = data.ResultSet.Table;
    });
  }
  UploadTopper() {    
    const formData = new FormData();
    const objBO = {
      url: 'api/data/UploadTopper',
      Name:this.dataInfo.Name,
      class:this.dataInfo.Class,
      Session:this.dataInfo.Session,      
      Prm2:this.dataInfo.RollNo,
      Prm3:this.dataInfo.Percentage,
      from:'1900/01/01',
      to:'1900/01/01',
      Logic: 'InsertTopper'
    }
    formData.append('data', JSON.stringify(objBO))
    formData.append('image',this.fileToUpload,this.fileToUpload.name)
    this.config.UploadFile(objBO.url,formData).subscribe(data => {
      alert(data);     
      this.GetToppersInfo();
      this.inputFile='';
    });
  }
  DeleteTopper(id: any) {
    if (confirm('Are you sure to delete?')) {
      const objBO = {
        url: 'api/data/InsertUpdateDataInfo',
        AutoId: id,
        from: '1900/01/01',
        to: '1900/01/01',
        Logic: 'DeleteTopper',
      };
      this.config.post(objBO).subscribe(data => {
        if (data.includes('Success')) {
         // this.GetTeachersInfo();
        }
        else {
          alert(data);
        }
      });
    }
  }
}
