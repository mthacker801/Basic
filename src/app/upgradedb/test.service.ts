// import { Injectable, OnChanges, getDebugNode } from '@angular/core';
// import { HttpClient, HttpResponse } from '@angular/common/http';
// import { IConnect } from '../connect';
// import { IDatabase } from '../database';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import { catchError, tap } from 'rxjs/operators';

// import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// import { environment } from '../../environments/environment';


// @Injectable()
// export class TestService {
//     private currentConn: IDatabase[] | null;

//     constructor(private _http: HttpClient) { }

// getConn() {
//     if (this.dbConn) {
//         return this.dbConn;
//     }
//     return this._http.get<IDatabase[]>(this.dbConn)
//         .pipe(tap(data => console.log(JSON.stringify(data)))
//     );
// }

// getDbList(dbConn): Observable<IDatabase[]> {
//     return this._http.post<IDatabase[]>(this.endpoint + '/dbs', dbConn);
// }


// Suggestion from Nate K. on whiteboard
// => {
//     res.x.length
//     if(res.x.length) {
//         set.localstorage(connData)
//     } else {
//         //error
//     }
//     }
// }

// getData(name): Observable<IDatabase[]> {
//     if (name === '') {
//         return of(this.initializeData())
//     }
// }

// updateConn(database: IDatabase) {

// }

    // }

