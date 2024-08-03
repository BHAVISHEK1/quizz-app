import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Question {
  question: string;
  options: string[];
  answer: string;
}

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  // questions: Question[] = [
  //   {
  //     question: 'What is the capital of France?',
  //     options: ['Paris', 'London', 'Berlin', 'Madrid'],
  //     answer: 'Paris'
  //   },
  //   {
  //     question: 'What is 2 + 2?',
  //     options: ['3', '4', '5', '6'],
  //     answer: '4'
  //   },
   
  // ];

  // userAnswers: string[] = new Array(this.questions.length).fill('');

  // constructor(private router: Router) {}

  // submitQuiz() {
  //   const score = this.calculateScore();
  //   localStorage.setItem('score', score.toString());
  //   localStorage.setItem('totalQuestions', this.questions.length.toString());
  //   this.router.navigate(['/score']);
  // }

  // calculateScore(): number {
  //   let score = 0;
  //   this.questions.forEach((question, index) => {
  //     if (question.answer === this.userAnswers[index]) {
  //       score++;
  //     }
  //   });
  //   return score;
  
}
