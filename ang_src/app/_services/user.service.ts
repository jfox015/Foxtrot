
import {throwError as observableThrowError,  Observable,  Subject } from 'rxjs';
import { map, catchError } from "rxjs/operators";
import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpResponse } from "@angular/common/http";


import { User } from '../_models/index';

@Injectable()
export class UserService {

    constructor(private http: HttpClient) { }

    getAll(): Observable<any> {
        return this.http.get('/api/users')
            .pipe(map(this.extractData), catchError(this.handleError));
    }

    getById(id: number): Observable<any> {
        return this.http.get('/api/users/' + id)
            .pipe(map(this.extractData), catchError(this.handleError));
    }

    create(user: User): Observable<any> {
        return this.http.post('/api/users', user)
            .pipe(map(this.extractData), catchError(this.handleError));
    }

    update(user: User) {
        return this.http.put('/api/' + user._id + '/users/', user);
    }

    delete(id: number) {
        return this.http.delete('/api/users/' + id);
    }
    /*--------------------------------------------------
    /    PRIVATE FUNCTIONS
    /-------------------------------------------------*/

    private extractData(res: HttpResponse<any>) {
        console.log("UserService -> extractData");
        console.log(res);
        //let body = res.body;
        if (res.status < 200 || res.status >= 300)
            this.handleError(res);
        return res || { };
    }
    
    private handleError (res: any) {
        console.log("UserService -> handleError");
        console.log(res);
        let body = res.body;
        // In a real world app, we might send the error to remote logging infrastructure
        let errMsg = body.errmsg || 'Server error';
        //console.error("An error occured! " + errMsg); // log to console instead
        return observableThrowError(errMsg);
    }
}