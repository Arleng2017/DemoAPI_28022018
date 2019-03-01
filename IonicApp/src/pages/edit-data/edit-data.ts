import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallApiProvider } from '../../providers/call-api/call-api';

/**
 * Generated class for the EditDataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-data',
  templateUrl: 'edit-data.html',
})
export class EditDataPage {

  studentID: any;
  studentData: any;
  editStudentName: string;
  editStudentScore: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public callAPI: CallApiProvider) {
    this.studentID = this.navParams.get('_idStudent');
    console.log(this.studentID);

    this.callAPI.getStudentDataByID(this.studentID).subscribe(data => {
      console.log(data);
      this.studentData = data;
    });
    console.log(this.studentData);

    // this.callAPI.putStudentData(this.editStudentName).subscribe(data => {
    //   this.studentData.name = data;
    // });

  }

  editStudentData(){
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditDataPage');
  }

}
