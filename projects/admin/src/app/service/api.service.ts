import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  baseUrl: string = 'http://api.stmichaelschoolraksa.org/';
  rootUrl: string = 'http://stmichaelschoolraksa.org/admin/';
  // baseUrl: string = 'http://api.stmichaelschoolraksa.org/';
  // rootUrl: string = 'http://localhost:4201/';
  IsAuth=new BehaviorSubject(false);
  error = '';
  headers = new HttpHeaders().set('Content-Type', 'application/json')
    .set('Accept', 'application/json')  
    .set('Access-Control-Allow-Origin', '*');
  constructor(private http: HttpClient,private _router:Router) { }

  post(data: any): Observable<any> {  
    return this.http.post(this.baseUrl + data.url, data, { headers: this.headers });
  }
  UploadFile(url:string,data: any): Observable<any> {             
    return this.http.post(this.baseUrl + url, data);
  }
  Login(){
    this.IsAuth.next(true);   
    this._router.navigate(['dashboard']);
  }
  Logout(){
    this.IsAuth.next(false);   
    this._router.navigate(['/']);
  }
  public loadScript() {
    const jsArray = [
      'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js',
      'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js',
      'assets/select2.js'
    ];
    for (let i = 0; i < jsArray.length; i++) {
      let node = document.createElement('script');
      node.src = jsArray[i];
      node.type = 'text/javascript';
      node.async = false;
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }
}
