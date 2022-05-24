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
import { CodeErreurListComponent } from './codeErreurBCT/code-erreur-list/code-erreur-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CodeErreurAjouterComponent } from './codeErreurBCT/code-erreur-ajouter/code-erreur-ajouter.component';
import { CodeErreurModifierComponent } from './codeErreurBCT/code-erreur-modifier/code-erreur-modifier.component';


@NgModule({
  declarations: [
    AppComponent,
    RapportRejetComponent,
    RapportPPRejetComponent,
    RapportPMRejetComponent,
    CodeErreurListComponent,
    CodeErreurAjouterComponent,
    CodeErreurModifierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [RapportRejetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
