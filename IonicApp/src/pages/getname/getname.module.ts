import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GetnamePage } from './getname';

@NgModule({
  declarations: [
    GetnamePage,
  ],
  imports: [
    IonicPageModule.forChild(GetnamePage),
  ],
})
export class GetnamePageModule {}
