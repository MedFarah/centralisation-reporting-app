import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { RapportPMAjoutComponent } from './rapportPM/rapport-pm-ajout/rapport-pm-ajout.component';
import { RapportPMModifierComponent } from './rapportPM/rapport-pm-modifier/rapport-pm-modifier.component';
import { RapportPMDetailComponent } from './rapportPM/rapport-pm-detail/rapport-pm-detail.component';
import { StrucureCorpListComponent } from './structure/strucure-corp-list/strucure-corp-list.component';
import { StrucureCorpAjoutComponent } from './structure/strucure-corp-ajout/strucure-corp-ajout.component';
import { StrucureCorpModifComponent } from './structure/strucure-corp-modif/strucure-corp-modif.component';
import { StructureFinListComponent } from './structure/structure-fin-list/structure-fin-list.component';
import { StructureFinAjoutComponent } from './structure/structure-fin-ajout/structure-fin-ajout.component';
import { StructureFinModifComponent } from './structure/structure-fin-modif/structure-fin-modif.component';
import { StructureEnteteListComponent } from './structure/structure-entete-list/structure-entete-list.component';
import { StructureEnteteAjoutComponent } from './structure/structure-entete-ajout/structure-entete-ajout.component';
import { StructureEnteteModifComponent } from './structure/structure-entete-modif/structure-entete-modif.component';
import { NgChartsModule } from 'ng2-charts';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { ApprobationDocumentListComponent } from './declarations/approbation-document-list/approbation-document-list.component';
import { ApprobationDocumentAjoutComponent } from './declarations/approbation-document-ajout/approbation-document-ajout.component';
import { ApprobationDocumentModifierComponent } from './declarations/approbation-document-modifier/approbation-document-modifier.component';
import { DeclarationListComponent } from './declarations/declaration-list/declaration-list.component';
import { DeclarationAjouterComponent } from './declarations/declaration-ajouter/declaration-ajouter.component';
import { DeclarationModfierComponent } from './declarations/declaration-modfier/declaration-modfier.component';
import { HistoriqueModificationListComponent } from './declarations/historique-modification-list/historique-modification-list.component';
import { HistoriqueModificationNewComponent } from './declarations/historique-modification-new/historique-modification-new.component';
import { HistoriqueModificationUpdateComponent } from './declarations/historique-modification-update/historique-modification-update.component';
import { ListeDestinataireListComponent } from './declarations/liste-destinataire-list/liste-destinataire-list.component';
import { ListeDestinataireNewComponent } from './declarations/liste-destinataire-new/liste-destinataire-new.component';
import { ListeDestinataireUpdateComponent } from './declarations/liste-destinataire-update/liste-destinataire-update.component';
import { ArchiveODComponent } from './archives/archive-od/archive-od.component';
import { ArchivePPComponent } from './archives/archive-pp/archive-pp.component';
import { ArchivePMComponent } from './archives/archive-pm/archive-pm.component';
import { LoginComponent } from './security/login/login.component';
import { RegisterComponent } from './security/register/register.component';
import { ForgetPasswordComponent } from './security/forget-password/forget-password.component';
import { DeclarationService } from './services/declaration.service';
import { AuthentificationService } from './services/authentification.service';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { AuthGuard } from './guards/auth.guard';
import { AuthInterceptor } from './services/auth.interceptor';
   





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
    RapportPMListComponent,
    RapportPMAjoutComponent,
    RapportPMModifierComponent,
    RapportPMDetailComponent,
    StrucureCorpListComponent,
    StrucureCorpAjoutComponent,
    StrucureCorpModifComponent,
    StructureFinListComponent,
    StructureFinAjoutComponent,
    StructureFinModifComponent,
    StructureEnteteListComponent,
    StructureEnteteAjoutComponent,
    StructureEnteteModifComponent,
    DashboardComponent,
    ApprobationDocumentListComponent,
    ApprobationDocumentAjoutComponent,
    ApprobationDocumentModifierComponent,
    DeclarationListComponent,
    DeclarationAjouterComponent,
    DeclarationModfierComponent,
    HistoriqueModificationListComponent,
    HistoriqueModificationNewComponent,
    HistoriqueModificationUpdateComponent,
    ListeDestinataireListComponent,
    ListeDestinataireNewComponent,
    ListeDestinataireUpdateComponent,
    ArchiveODComponent,
    ArchivePPComponent,
    ArchivePMComponent,
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    NgChartsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule ,
    BrowserAnimationsModule
  ],
  
  providers: [RapportRejetService,
    RapportService,
    DeclarationService,
    AuthentificationService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
        JwtHelperService,
        AuthGuard,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true
         }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
