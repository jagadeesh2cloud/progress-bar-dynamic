import { Injectable } from '@angular/core';

import { IProgressBarComponent } from './progress-bar';

@Injectable({
  providedIn: 'root'
})
export class ProgressBarService {

  constructor() { }

  getQuestions(): IProgressBarComponent[] {
    return [{
      "questionId": 1,
      "questionText": "Question 1",
      "questionAnswered": true,
      "answer": 2
    }, {
      "questionId": 2,
      "questionText": "Question 2",
      "questionAnswered": true,
      "answer": 1
    },
    {
      "questionId": 3,
      "questionText": "Question 3",
      "questionAnswered": false,
      "answer": 0
    },{
      "questionId": 4,
      "questionText": "Question 4",
      "questionAnswered": true,
      "answer": 2
    }, {
      "questionId": 5,
      "questionText": "Question 5",
      "questionAnswered": true,
      "answer": 1
    },
    {
      "questionId": 6,
      "questionText": "Question 6",
      "questionAnswered": false,
      "answer": 0
    }];
  }
}
