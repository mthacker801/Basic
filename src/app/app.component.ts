import { Component, OnInit, OnChanges } from '@angular/core';
import { DblistService } from './dblist.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  DblistService: any;
  title = 'Conversion Toolkit';
  _dbConnData = {};

  constructor(private dblistService: DblistService) {}

  ngOnInit() {
  }
}
