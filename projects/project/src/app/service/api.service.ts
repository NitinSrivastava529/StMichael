import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl: string = 'http://api.stmichaelschoolraksa.org/';
  rootUrl: string = 'http://stmichaelschoolraksa.org/';
  headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .set('Accept-Control-Allow-Origin', '*');
  constructor(private http: HttpClient) { }
  post(data: any): Observable<any> {
    return this.http.post(this.baseUrl + data.url, data, { headers: this.headers });
  }
  public loadScript() {
    const jsArray = [
      'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js',
      'assets/js/jquery.min.js',
      'assets/js/modernizr-2.8.3.min.js',
      'assets/js/bootstrap.min.js',
      'assets/js/owl.carousel.min.js',
      'assets/js/slick.min.js',
      'assets/js/isotope.pkgd.min.js',
      'assets/js/imagesloaded.pkgd.min.js',
      'assets/js/wow.min.js',
      'assets/js/waypoints.min.js',
      'assets/js/jquery.counterup.min.js',
      'assets/js/jquery.magnific-popup.min.js',
      'assets/js/rsmenu-main.js',
      'assets/js/plugins.js',
      'assets/js/main.js'
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
