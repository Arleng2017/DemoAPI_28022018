import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, List } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { CallApiProvider } from '../../providers/call-api/call-api';
import { FormGroup, FormBuilder } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-getname',
  templateUrl: 'getname.html',
})
export class GetnamePage {

  public getAllName: any;
  public user: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,public fb:FormBuilder, public http: HttpClient, public callApi: CallApiProvider) {
  this.user = fb.group({
    'index' : [null]
  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GetnamePage');

    let value = this.callApi.getAllName();
    value.subscribe((data) => {
      this.getAllName = data;
      console.log(data);
    });
  }

 
}

