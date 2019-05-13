import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { QuestionOneComponent } from './components/question-one/question-one.component';
import { QuestionTwoComponent } from './components/question-two/question-two.component';



const routesAlana: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'question1', component: QuestionOneComponent },
    { path: 'question2', component: QuestionTwoComponent },
    { path: '**', component: HomeComponent }
];

export const APP_ROUTING = RouterModule.forRoot(routesAlana);
