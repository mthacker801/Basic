import { Injectable, OnChanges } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Database } from './database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Subject} from 'rxjs/Subject';
import { tap } from 'rxjs/operators';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { environment } from '../environments/environment';


@Injectable()
export class DblistService {

    constructor(private _http: HttpClient) { }

    endpoint = environment.path;
    myDatabase: Database = new Database('mpd-mthacker\\mssqlserver_2014', 'sa', 'ManagerPlus1', 'd', '1');
    private Connect$ = new BehaviorSubject<Database>(this.myDatabase);
    connectionString: any;
    public currentConn = this.Connect$.asObservable();

    setConn(dbName: string) {
        const url = `${this.endpoint + '/version'}`;
        this.myDatabase.database = dbName;
        this.Connect$.next(this.myDatabase);
        console.log(this.Connect$);
        return this._http.post<Database>(url, dbName);
    }

    getDbList(dbConn): Observable<Database> {
        this.connectionString = dbConn;
        const url = `${this.endpoint + '/dbs'}`;
        this.myDatabase.server = dbConn.server;
        this.myDatabase.user = dbConn.user;
        this.myDatabase.password = dbConn.password;
        this.Connect$.next(this.myDatabase);
        // console.log(this.Connect$);
        return this._http.post<Database>(url, dbConn);
    }

    getAnalysis(dbConn) {
        return this._http.post<any>(this.endpoint + '/proUpgrade/getAnalysis', dbConn);
      }
}

