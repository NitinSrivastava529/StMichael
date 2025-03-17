import { Component, OnInit } from '@angular/core';
import { APIService } from '../service/api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit{
  dataList: any;
  baseUrl: string = '';
  fileToUpload: any;
  inputFile:any;
  dataInfo: any = {
    News: '',
    Description: ''    
  }
  constructor(private config:APIService){}
  ngOnInit(): void {
    this.baseUrl=this.config.baseUrl;
    this.GetNews()
  }
  onSelect(event:any){   
    this.fileToUpload = <File>event.target.files[0];   
  }
  GetNews() {
    const objBO = {
      url: 'api/data/DataQueries',
      AutoId: 0,
      from: '1900/01/01',
      to: '1900/01/01',
      Logic: 'GetNews'
    };
    this.config.post(objBO).subscribe(data => {
      console.log(data)
      this.dataList = data.ResultSet.Table;
    });
  }
  UploadNews() {    
    const formData = new FormData();
    const objBO = {
      url: 'api/data/UploadNews',
      Name:this.dataInfo.News,        
      Prm1:this.dataInfo.Description,
      Prm2:'-',
      from:'1900/01/01',
      to:'1900/01/01',
      Logic: 'InsertNews'
    }
    formData.append('data', JSON.stringify(objBO))
    formData.append('image',this.fileToUpload,this.fileToUpload.name)
    this.config.UploadFile(objBO.url,formData).subscribe(data => {
      alert(data);     
      this.GetNews();
      this.inputFile='';
      this.fileToUpload=null;
      this.dataInfo={
        News: '',
        Description: ''    
      }
    });
  }
  Delete(id: any) {
    if (confirm('Are you sure to delete?')) {
      const objBO = {
        url: 'api/data/InsertUpdateDataInfo',
        AutoId: id,
        from: '1900/01/01',
        to: '1900/01/01',
        Logic: 'DeleteNews',
      };
      this.config.post(objBO).subscribe(data => {
        if (data.includes('Success')) {
          this.GetNews();
        }
        else {
          alert(data);
        }
      });
    }
  }
}
