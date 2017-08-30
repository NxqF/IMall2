import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProblemPage } from './problem';

@NgModule({
  declarations: [
    ProblemPage,
  ],
  imports: [
    IonicPageModule.forChild(ProblemPage),
  ],
  exports: [
    ProblemPage
  ]
})
export class ProblemPageModule { }
