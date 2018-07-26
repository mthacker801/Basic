import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { DblistService } from '../dblist.service';
import { IDatabase } from '../database';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';


@Component({
  // tslint:disable-next-line:component-selector
  templateUrl: './upgradedb.component.html',
  styleUrls: ['./upgradedb.component.css']
})

export class UpgradedbComponent implements OnInit {
  versionList;

  @Input()
    dbList: IDatabase[];
    subscription: Subscription;
// create variables to be used in component and HTML
  errorMessage: string;
  DBDeskControl = new FormControl();
  databaseForm: FormGroup;
  _dbConnData = {};

   @Output()
    dbName = new EventEmitter();
    selectedDb: any;

  // Inject
constructor(private _dblistService: DblistService) {}

    valueChanged(data) {
      this.selectedDb = data.value;
    }

ngOnInit() {}
}

