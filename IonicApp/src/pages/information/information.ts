import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallApiProvider } from '../../providers/call-api/call-api';

/**
 * Generated class for the InformationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-information',
  templateUrl: 'information.html',
})
export class InformationPage {

  studentID: any;
  studentData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public callAPI: CallApiProvider) {
    this.studentID = this.navParams.get('_idStudent');
    console.log(this.studentID);
    
    this.callAPI.getStudentDataByID(this.studentID).subscribe(data => {
      console.log(data);
      this.studentData = data;
    });
    

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad InformationPage');
  }

}
