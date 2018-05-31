// app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {StudentService} from './student.service';
import {StudentComponent} from './student/student.component';

@NgModule({
    declarations: [
        AppComponent,
        StudentComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        HttpClientModule
    ],
    providers: [StudentService],
    bootstrap: [AppComponent]
})
export class AppModule { }
