import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DblistService } from '../dblist.service';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';

@Component({
  // tslint:disable-next-line:component-selector
  templateUrl: './upgradedb.component.html',
  styleUrls: ['./upgradedb.component.css']
})

export class UpgradedbComponent implements OnInit {
// create variables to be used in component and HTML
  _dbConnData = {};

   @Output()
    dbName = new EventEmitter();
    database: string;

  // Inject
constructor(private _dblistService: DblistService) {}

  ngOnInit() {
  this._dblistService.currentConn
    .subscribe(_dbConnData => this._dbConnData = _dbConnData);
    // console.log(this._dbConnData);
  }

    sendDbName(database) {
      this._dblistService.setConn(database.value);
      // console.log('received:', name);
    }

    getDbVersion() {

    }

}

