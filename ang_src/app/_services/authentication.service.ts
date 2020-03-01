
import {throwError as observableThrowError,  Observable ,  Subject } from 'rxjs';
import { map, catchError } from "rxjs/operators";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class AuthenticationService {

    private userLoggedInSource = new Subject<boolean>();
    public userLoggedIn$ = this.userLoggedInSource.asObservable();
    private userRegistering$Source = new Subject<boolean>();
    public registering$ = this.userRegistering$Source.asObservable();

    constructor(private http: HttpClient) { }

    announceUser(status: boolean) {
        this.userLoggedInSource.next(status);
    }
    announceRegistering(status: boolean) {
        this.userRegistering$Source.next(status);
    }

    login(email: string, password: string) {
        return this.http.post<any>('/api/authenticate', { email: email, password: password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
                this.announceUser(true);
                return user;
            }), catchError(this._handleError));
    }

    getUserDetails() {
        var currUser = JSON.parse(localStorage.getItem('currentUser'));
        if (typeof currUser !== 'undefined') {
            return currUser.user;
        } else {
            return null;
        }
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.announceUser(false);
    }

    private _handleError (res: any) {
        console.log("AuthenticationService -> handleError");
        console.log(res);
        let error = res.error || {};
        // In a real world app, we might send the error to remote logging infrastructure
        let errMsg = error.errors.msg || 'Unknown Server error';
        //console.error("An error occured! " + errMsg); // log to console instead
        return observableThrowError(errMsg);
    }
}