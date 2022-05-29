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
import { RapportODListComponent } from './rapportOD/rapport-od-list/rapport-od-list.component';
import { RapportODAjouterComponent } from './rapportOD/rapport-od-ajouter/rapport-od-ajouter.component';
import { RapportService } from './services/rapport.service';
import { RapportODModifierComponent } from './rapportOD/rapport-od-modifier/rapport-od-modifier.component';
import { RapportODDetailComponent } from './rapportOD/rapport-od-detail/rapport-od-detail.component';
import { RapportPPListComponent } from './rapportPP/rapport-pp-list/rapport-pp-list.component';
import { RapportPPAjoutComponent } from './rapportPP/rapport-pp-ajout/rapport-pp-ajout.component';
import { RapportPPModiferComponent } from './rapportPP/rapport-pp-modifer/rapport-pp-modifer.component';
import { RapportPPDetailComponent } from './rapportPP/rapport-pp-detail/rapport-pp-detail.component';
import { RapportPMListComponent } from './rapportPM/rapport-pm-list/rapport-pm-list.component';


@NgModule({
  declarations: [
    AppComponent,
    RapportRejetComponent,
    RapportPPRejetComponent,
    RapportPMRejetComponent,
    CodeErreurListComponent,
    CodeErreurAjouterComponent,
    CodeErreurModifierComponent,
    RapportODListComponent,
    RapportODAjouterComponent,
    RapportODModifierComponent,
    RapportODDetailComponent,
    RapportPPListComponent,
    RapportPPAjoutComponent,
    RapportPPModiferComponent,
    RapportPPDetailComponent,
    RapportPMListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [RapportRejetService,
    RapportService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
