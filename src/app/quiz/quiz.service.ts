// import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';

// interface Question {
//   question: string;
//   options: string[];
//   answer: string;
// }

// @Injectable({
//   providedIn: 'root',
// })
// export class QuizService {
//   questions: Question[] = [
//     {
//       question: 'Who is the current Prime Minister of India?',
//       options: ['Narendra Modi', 'Manmohan Singh', 'Atal Bihari Vajpayee', 'Rajiv Gandhi'],
//       answer: 'Narendra Modi'
//     },
//     {
//       question: 'Which Indian city is known as the "Pink City"?',
//       options: ['Jaipur', 'Delhi', 'Mumbai', 'Hyderabad'],
//       answer: 'Jaipur'
//     },
//     {
//       question: 'Which of the following is the national flower of India?',
//       options: ['Lotus', 'Rose', 'Jasmine', 'Lily'],
//       answer: 'Lotus'
//     },
//     {
//       question: 'What is the capital of India?',
//       options: ['New Delhi', 'Mumbai', 'Kolkata', 'Chennai'],
//       answer: 'New Delhi'
//     },
//     {
//       question: 'Who was the first President of India?',
//       options: ['Dr. Rajendra Prasad', 'Dr. Sarvepalli Radhakrishnan', 'Dr. Zakir Husain', 'Jawaharlal Nehru'],
//       answer: 'Dr. Rajendra Prasad'
//     },
//   ];

//   userAnswers: string[] = new Array(this.questions.length).fill('');

//   constructor(private router: Router) {}

//   submitQuiz() {
//     const score = this.calculateScore();
//     localStorage.setItem('score', score.toString());
//     this.router.navigate(['/score']);
//   }

//   calculateScore(): number {
//     let score = 0;
//     this.questions.forEach((question, index) => {
//       if (question.answer === this.userAnswers[index]) {
//         score++;
//       }
//     });
//     return score;
//   }
// }
