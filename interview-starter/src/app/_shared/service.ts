import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { User, UserDetails } from "../_state/users/users-store";

@Injectable({
providedIn:'root'
})
export class UserService {
    constructor(private http: HttpClient) {

    }

    getUserDetails(): Observable<UserDetails> {
        return this.http.get<UserDetails>('https://dummyjson.com/users');
    }

    saveUserDetails(data: User) {
        return this.http.post('https://dummyjson.com/users',data).pipe(catchError(this.handelError));
    }

    handelError(error: HttpErrorResponse) {
        console.log(error);
        return throwError({ name: 'Error', desription: error?.message, status: error?.status });
    }
}