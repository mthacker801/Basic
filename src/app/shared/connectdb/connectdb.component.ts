import { Component, OnInit, Input } from '@angular/core';
import { DblistService } from '../../dblist.service';
import { Database } from '../../database';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-connectdb',
  templateUrl: './connectdb.component.html',
  styleUrls: ['./connectdb.component.css']
})
// tslint:disable-next-line:component-class-suffix
export class ConnectdbComponent implements OnInit {
  _dbConnData = {};
  @Input()
  dbConn: Database;

  public constructor(private _dblistService: DblistService) {}

  ngOnInit() {
  }

  sendConn() {
    this._dblistService.getDbList(this._dbConnData)
    .subscribe(sub => {
        this.dbConn = <Database>sub;
    });
  }

}
