import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule
 } from '@angular/material';
 import { MatCheckboxModule } from '@angular/material/checkbox';
 import {
  DxBoxModule,
  DxButtonModule,
  DxCheckBoxModule,
  DxFileUploaderModule,
  DxDataGridModule,
  DxSelectBoxModule,
  DxTextBoxModule,
  DxTabPanelModule,
  DxTabsModule
} from 'devextreme-angular';


import { AppComponent } from './app.component';
import { UpgradedbComponent } from './upgradedb/upgradedb.component';
import { ConnectdbComponent } from './shared/connectdb/connectdb.component';
import { DblistService } from './dblist.service';


// import { CsvreportComponent } from '../app/upgradedb/csvreport/csvreport.component';

const appRoutes: Routes = [
  { path: 'upgradedb', component: UpgradedbComponent },
  { path: '', redirectTo: 'upgradedb', pathMatch: 'full' },
  { path: '**', redirectTo: 'upgradedb', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    UpgradedbComponent,
    ConnectdbComponent
  ],

  imports: [
    BrowserModule,
    CommonModule,
    DxBoxModule,
    DxButtonModule,
    DxCheckBoxModule,
    DxDataGridModule,
    DxTabPanelModule,
    DxTabsModule,
    DxTextBoxModule,
    DxSelectBoxModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatAutocompleteModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    DxFileUploaderModule,
  ],
  exports: [],
  providers: [
    DblistService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
