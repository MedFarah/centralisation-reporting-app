import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { RapportRejetComponent } from './components/rapport-rejet/rapport-rejet.component';
import { RapportPPRejetComponent } from './rapport-pp-rejet/rapport-pp-rejet.component';
import { RapportRejetService } from './services/rapport-rejet.service';
import { RouterModule } from '@angular/router';
import { RapportPMRejetComponent } from './rapport-pmrejet/rapport-pmrejet.component';


@NgModule({
  declarations: [
    AppComponent,
    RapportRejetComponent,
    RapportPPRejetComponent,
    RapportPMRejetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [RapportRejetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
