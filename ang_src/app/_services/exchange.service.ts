
import {throwError as observableThrowError,  Observable,  Subject } from 'rxjs';
import { map, catchError } from "rxjs/operators";
import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpResponse } from "@angular/common/http";

@Injectable()
export class ExchangeService {

    private _exchangeUrl = '/api/:id/exchange/:symbol';

    constructor(private http: HttpClient) { }

    /** ----------------------------------------
    /    UTILITY FUNCTIONS
    /-----------------------------------------*/
    exchange(userId, symbol, transObj): Observable<any> {
        return this.http.post(this._exchangeUrl.replace(':id',userId).replace(':symbol',symbol), transObj)
            .pipe(map(this.extractData), catchError(this.handleError));
    }
    /*--------------------------------------------------
    /    PRIVATE FUNCTIONS
    /-------------------------------------------------*/
    private extractData(res: HttpResponse<any>) {
        console.log("extractData");
        console.log(res);
        //let body = res.body;
        if (res.status < 200 || res.status >= 300)
            this.handleError(res);
        return res || { };
    }
    
    private handleError (res: any) {
        console.log("extractData");
        console.log(res);
        let body = res.body;
        // In a real world app, we might send the error to remote logging infrastructure
        let errMsg = body.error || 'Server error';
        //console.error("An error occured! " + errMsg); // log to console instead
        return observableThrowError(errMsg);
    }
}