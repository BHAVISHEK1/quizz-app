import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  score: number = 0;
  totalQuestions: number = 5; 
  percentageScore: number = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const score = localStorage.getItem('score');
    const totalQuestions = localStorage.getItem('totalQuestions');
    
    if (score) {
      this.score = parseInt(score, 10);
    }
    
    if (totalQuestions) {
      this.totalQuestions = parseInt(totalQuestions, 10);
    }

    this.calculatePercentage();
  }

  calculatePercentage() {
    if (this.totalQuestions > 0) {
      this.percentageScore = (this.score / this.totalQuestions) * 100;
    } else {
      this.percentageScore = 0;
    }
  }

  retakeQuiz() {
    this.router.navigate(['/quiz']);
  }

  home() {
    this.router.navigate(['/']);
  }
}
