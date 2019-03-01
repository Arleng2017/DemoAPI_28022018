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
  newStudentName: string;
  newStudentScore: number;
  deleteStudent: any;

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

  getDataById(idStudent: string) {
    console.log(idStudent);
    this.navCtrl.push("InformationPage", { _idStudent: idStudent });

  }

  editData(idStudent: string) {
    console.log(idStudent);
    this.navCtrl.push("EditDataPage", { _idStudent: idStudent });
  }

  addData() {
    this.callAPI.postStudentData(this.newStudentName).subscribe(data => {

    });;
    // this.callAPI.postStudentData(this.newStudentScore).subscribe(data => {

    // });;
  }

  deleteData() {
    this.callAPI.deleteStudentData(this.deleteData).subscribe(data =>{

    });;
  }
}
