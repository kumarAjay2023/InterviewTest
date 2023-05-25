import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

// used to create fake backend

import { AppComponent } from './app.component';
import { UserService } from './_shared/service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
    ],
    declarations: [
        AppComponent,
        UserService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };