import { Component, OnInit } from '@angular/core';
import { APIService } from '../service/api.service';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})
export class PhotoGalleryComponent implements OnInit {
  GalleryInfo: any;
  fileToUpload: any;
  inputFile:any;
  baseUrl:string=''; 
  constructor(private config: APIService) { }

  ngOnInit(): void {
   this.GetGallery();
   this.baseUrl=this.config.baseUrl;
  }
  onSelect(event:any){   
    this.fileToUpload = <File>event.target.files[0];   
  }
  SaveGallery() {    
    const formData = new FormData();
    const objBO = {
      url: 'api/data/UploadGallery',
      from:'1900/01/01',
      to:'1900/01/01',
      Logic: 'InsertGallery'
    }
    formData.append('data', JSON.stringify(objBO))
    formData.append('image',this.fileToUpload,this.fileToUpload.name)
    this.config.UploadFile(objBO.url,formData).subscribe(data => {
      alert(data);
      this.GetGallery();
      this.inputFile='';
    });
  }
  GetGallery() {
    const objBO = {      
      url: 'api/data/DataQueries',
      AutoId: 0,
      from:'1900/01/01',
      to:'1900/01/01',
      Logic: 'GetGallery'
    };
    this.config.post(objBO).subscribe(data => {
      this.GalleryInfo = data.ResultSet.Table;
    });
  }
  DeleteGallery(id: any) {
    if (confirm('Are you sure to delete?')) {
      const objBO = {
        url: 'api/data/InsertUpdateDataInfo',
        AutoId: id,
        from:'1900/01/01',
        to:'1900/01/01',
        Logic: 'DeleteGallery',
      };
      this.config.post(objBO).subscribe(data => {
        if (data.includes('Success')) {
          this.GetGallery();
        }
        else {
          alert(data);
        }
      });
    }
  }
}
