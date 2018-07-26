import { Component, OnInit, Input, Output } from '@angular/core';
import { IDatabase } from '../../database';
import { DblistService } from '../../dblist.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-connectdb',
  templateUrl: './connectdb.component.html',
  styleUrls: ['./connectdb.component.css']
})
// tslint:disable-next-line:component-class-suffix
export class ConnectdbComponent implements OnInit {
  _dbConnData = {};
  dbNames = [];
  @Input()
  dbList: IDatabase[];

  constructor(private _dblistService: DblistService) {}

  ngOnInit() {
  }

  showDbList() {
    this._dblistService.getDbList(this._dbConnData)
    .subscribe(sub => {
        this.dbList = <IDatabase[]>sub;
    });
  }
}
