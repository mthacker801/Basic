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
    name: string;

  // Inject
constructor(private _dblistService: DblistService) {}

  ngOnInit() {
  this._dblistService.currentConn
    .subscribe(_dbConnData => this._dbConnData = _dbConnData);
    // console.log(this._dbConnData);
  }

    sendDbName(name) {
      this._dblistService.setConn(name.value);
      // console.log('received:', name);
    }
    // sendInfo(name: string) {
    //   const upgradeInput = {
    //       name: name
    //     };
    //     this._dblistService.addDbName(upgradeInput);
    //   }
          // valueChanged(data) {
          //   this.selectedDb = data.value;
          // }
}

