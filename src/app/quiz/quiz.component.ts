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
  
  questions: Question[] = [
    {
      question: 'Who is the current Prime Minister of India?',
      options: ['Narendra Modi', 'Manmohan Singh', 'Atal Bihari Vajpayee', 'Rajiv Gandhi'],
      answer: 'Narendra Modi'
    },
    {
      question: 'Which Indian city is known as the "Pink City"?',
      options: ['Jaipur', 'Delhi', 'Mumbai', 'Hyderabad'],
      answer: 'Jaipur'
    },
    {
      question: 'Which of the following is the national flower of India?',
      options: ['Lotus', 'Rose', 'Jasmine', 'Lily'],
      answer: 'Lotus'
    },
    {
      question: 'What is the capital of India?',
      options: ['New Delhi', 'Mumbai', 'Kolkata', 'Chennai'],
      answer: 'New Delhi'
    },
    {
      question: 'Who was the first President of India?',
      options: ['Dr. Rajendra Prasad', 'Dr. Sarvepalli Radhakrishnan', 'Dr. Zakir Husain', 'Jawaharlal Nehru'],
      answer: 'Dr. Rajendra Prasad'
    },
  ];

  userAnswers: string[] = new Array(this.questions.length).fill('');
  showErrorMessage: boolean = false;

  constructor(private router: Router) {}

  submitQuiz(form: any): void {
  
    this.showErrorMessage = false;


    if (this.isFormValid()) {
      const score = this.calculateScore();
      localStorage.setItem('score', score.toString());
      this.router.navigate(['/score']);
    } else {
      this.showErrorMessage = true; 
    }
  }

  isFormValid(): boolean {
    return this.userAnswers.every(answer => answer !== '');
  }

  calculateScore(): number {
    let score = 0;
    this.questions.forEach((question, index) => {
      if (question.answer === this.userAnswers[index]) {
        score++;
      }
    });
    return score;
  }

  home(): void {
    this.router.navigate(['/welcome']);
  }
}
