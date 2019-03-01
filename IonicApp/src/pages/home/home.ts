import { HttpClient } from '@angular/common/http';
import { CallApiProvider } from './../../providers/call-api/call-api';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public getData: any = [];

  constructor(public navCtrl: NavController, public callAPI: CallApiProvider, public http: HttpClient) {
    //this.callAPI.getStudentData();
    //console.log(this.callAPI);

  }

  ionViewDidEnter() {
    this.callAPI.getStudentData().subscribe(data => {
      this.getData = data
      console.log(this.getData.name)
    });;

  }

  onSubmit(idStudent : string) {
    console.log(idStudent);
    this.navCtrl.push("InformationPage", { _idStudent: idStudent});
    
  }


}
