import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { IDatabase } from './database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Subject} from 'rxjs/Subject';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { environment } from '../environments/environment';



@Injectable()
export class DblistService {

    endpoint = environment.path;
    dbList: IDatabase[];
    private _versionList = './data.ts';

    // Observable Object/Array Source
    dbData: Subject<Array<IDatabase>> = new BehaviorSubject<Array<IDatabase>>([]);

     // Observable Object/Array stream
    // cast = this.dbData.asObservable();

    constructor(private _http: HttpClient) { }

    getDbList(dbConn): Observable < IDatabase[] > {
        return this._http.post<IDatabase[]>(this.endpoint + '/dbs', dbConn);
    }
}

