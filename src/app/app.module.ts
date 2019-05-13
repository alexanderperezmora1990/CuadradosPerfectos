import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { APP_ROUTING } from './app.routes';
import { FormComponent } from './components/form/form.component';
import { QuestionOneComponent } from './components/question-one/question-one.component';
import { QuestionTwoComponent } from './components/question-two/question-two.component';
import { PerfectSquareService } from './services/perfect-square.service';
import { ModalComponent } from './components/shared/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FormComponent,
    QuestionOneComponent,
    QuestionTwoComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    PerfectSquareService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
