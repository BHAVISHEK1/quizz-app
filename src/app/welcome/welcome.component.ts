import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {

  constructor(private router: Router) {}

  takeQuiz() {
    this.router.navigate(['/quiz']);
  }

  testGet() {
    this.router.navigate(['/dhan']);
  }

  testPost() {
    this.router.navigate(['/dhan-post']);
  }

}
