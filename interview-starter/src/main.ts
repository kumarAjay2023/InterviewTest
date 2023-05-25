import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication, BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from "@angular/router";

import { provideEffects } from "@ngrx/effects";
import { provideState, provideStore } from "@ngrx/store";

import { AppRoutes } from "@app/app-router";
import { AppComponent } from "@app/app.component";
import { UsersEffects } from "@app/_state/users/users-effects";
import { UsersReducer } from "@state/users/users-store";
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './app/_shared/service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';


bootstrapApplication(AppComponent,
    {
        providers: [
            provideRouter(AppRoutes),
            provideStore(),
            provideState(UsersReducer),
            provideEffects(UsersEffects),
            importProvidersFrom(BrowserAnimationsModule,
                BrowserModule,
                FormsModule,
                ReactiveFormsModule,
                HttpClientModule,
                UserService,
                FormBuilder,
                FormGroup),
        ]
    });
