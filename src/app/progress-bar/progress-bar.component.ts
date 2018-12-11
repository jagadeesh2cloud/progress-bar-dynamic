import { Component, OnInit } from '@angular/core';

import { IProgressBarComponent } from './progress-bar';
import { ProgressBarService } from './progress-bar.service';
import { PercentPipe } from '@angular/common';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  progressBarQuestions: IProgressBarComponent[] = [];
  totalAnsweredQuestions: number = 0;
  totalAnsweredPercent: number = 0;
  constructor(private progressBarService: ProgressBarService) { }

  ngOnInit(): void {
        this.progressBarQuestions = this.progressBarService.getQuestions();
        this.getTotalAnsweredQuestions();
  }

  getTotalAnsweredQuestions(): void {
    this.totalAnsweredQuestions = this.progressBarQuestions.reduce( 
      (a: number, b) => a + (b.questionAnswered ? 1 : 0), 0);
      this.totalAnsweredPercent = (this.totalAnsweredQuestions / this.progressBarQuestions.length) * 100;
  }

}


