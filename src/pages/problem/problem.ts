import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { NavigationService } from '../../providers/navigation-service/navigation-service';

@IonicPage()
@Component({
  selector: 'page-problem',
  templateUrl: 'problem.html',
})
export class ProblemPage {

  questions

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public navigationService: NavigationService
  ) {
    this.initializeQuestion();
  }

  initializeQuestion() {
    this.questions = this.navigationService.getQuestions()
  }

  setItems(ev: any) {
    this.initializeQuestion();

    let val = ev.target.value;

    if (val && val.trim() != '') {
      this.questions = this.questions.filter(
        (item) => {
          return (
            item.question.toLowerCase().indexOf(
              val.toLowerCase()) > -1 || item.answer.toLowerCase().indexOf(
                val.toLowerCase()) > -1
          );
        })
    }
  }

  onSetItem(en) {
    this.setItems(en)
  }

}
