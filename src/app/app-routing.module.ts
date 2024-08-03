import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { ScoreComponent } from './score/score.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MarketStatusComponent } from './market-status/market-status.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'score', component: ScoreComponent },
  { path: 'dhan', component: MarketStatusComponent },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
