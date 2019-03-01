import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the CallApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CallApiProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CallApiProvider Provider');
  }

  public getStudentDataByID(id: string): Observable<any> {
    return this.http.get('https://localhost:5001/api/Demo/' + id);
  }

  public getStudentData() {
    return this.http.get("https://localhost:5001/api/Demo")
      
  }

  public postStudentData(data: any): Observable<any> {
    return this.http.post('https://localhost:5001/api/Demo/', data);
  }

  public putStudentData(data: any): Observable<any> {
    return this.http.put('https://localhost:5001/api/Demo/', data);
  }

  public deleteStudentData(id: any): Observable<any> {
    return this.http.delete('https://localhost:5001/api/Demo/' + id);
  }

  public getAllName(){
    return this.http.get("https://localhost:5001/api/Name");
  }
}
