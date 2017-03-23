import { Injectable } from '@angular/core';
import { SERVER_URL } from './config';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PeopleService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PeopleService {
  data: any;

  constructor(private http: Http) {
    this.data = null;
  }

  load(){
    
    
    if(this.data){
      return Promise.resolve(this.data);
    }
    
    return new Promise(resolve => {
      let opt: RequestOptions
      let myHeaders: Headers = new Headers
        myHeaders.set('Access-Token' , 'cb35b2ccaf058f017824936d7fae8e9c');
        myHeaders.append('Environment-set','1');
      opt = new RequestOptions({headers: myHeaders });

      this.http.get('https://www.orekacloud.com/public/v1/dev-searches/conductor2@conductor.com/drv_email/1', opt)
        .map(res => res.json())
        .subscribe(data => {
        console.log('Conseguir datos');
        this.data = data;
        resolve(this.data);
      }, error => {
        console.log("Error with data")
      });
    });
    /*return new Promise(resolve => {
      this.http.get('https://www.orekacloud.com/public/v1/rows/11')
      .map(res => res.json())
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      });
    });*/
  }
}
