import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchiveODComponent } from './archives/archive-od/archive-od.component';
import { ArchivePMComponent } from './archives/archive-pm/archive-pm.component';
import { ArchivePPComponent } from './archives/archive-pp/archive-pp.component';
import { CodeErreurAjouterComponent } from './codeErreurBCT/code-erreur-ajouter/code-erreur-ajouter.component';
import { CodeErreurListComponent } from './codeErreurBCT/code-erreur-list/code-erreur-list.component';
import { CodeErreurModifierComponent } from './codeErreurBCT/code-erreur-modifier/code-erreur-modifier.component';
import { RapportRejetComponent } from './components/rapport-rejet/rapport-rejet.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { ApprobationDocumentAjoutComponent } from './declarations/approbation-document-ajout/approbation-document-ajout.component';
import { ApprobationDocumentListComponent } from './declarations/approbation-document-list/approbation-document-list.component';
import { ApprobationDocumentModifierComponent } from './declarations/approbation-document-modifier/approbation-document-modifier.component';
import { DeclarationAjouterComponent } from './declarations/declaration-ajouter/declaration-ajouter.component';
import { DeclarationListComponent } from './declarations/declaration-list/declaration-list.component';
import { DeclarationModfierComponent } from './declarations/declaration-modfier/declaration-modfier.component';
import { HistoriqueModificationListComponent } from './declarations/historique-modification-list/historique-modification-list.component';
import { HistoriqueModificationNewComponent } from './declarations/historique-modification-new/historique-modification-new.component';
import { HistoriqueModificationUpdateComponent } from './declarations/historique-modification-update/historique-modification-update.component';
import { ListeDestinataireListComponent } from './declarations/liste-destinataire-list/liste-destinataire-list.component';
import { ListeDestinataireNewComponent } from './declarations/liste-destinataire-new/liste-destinataire-new.component';
import { ListeDestinataireUpdateComponent } from './declarations/liste-destinataire-update/liste-destinataire-update.component';
import { AuthGuard } from './guards/auth.guard';
import { RapportPMRejetComponent } from './rapport-pmrejet/rapport-pmrejet.component';
import { RapportPPRejetComponent } from './rapport-pp-rejet/rapport-pp-rejet.component';
import { RapportODAjouterComponent } from './rapportOD/rapport-od-ajouter/rapport-od-ajouter.component';
import { RapportODDetailComponent } from './rapportOD/rapport-od-detail/rapport-od-detail.component';
import { RapportODListComponent } from './rapportOD/rapport-od-list/rapport-od-list.component';
import { RapportODModifierComponent } from './rapportOD/rapport-od-modifier/rapport-od-modifier.component';
import { RapportPMAjoutComponent } from './rapportPM/rapport-pm-ajout/rapport-pm-ajout.component';
import { RapportPMDetailComponent } from './rapportPM/rapport-pm-detail/rapport-pm-detail.component';
import { RapportPMListComponent } from './rapportPM/rapport-pm-list/rapport-pm-list.component';
import { RapportPMModifierComponent } from './rapportPM/rapport-pm-modifier/rapport-pm-modifier.component';
import { RapportPPAjoutComponent } from './rapportPP/rapport-pp-ajout/rapport-pp-ajout.component';
import { RapportPPDetailComponent } from './rapportPP/rapport-pp-detail/rapport-pp-detail.component';
import { RapportPPListComponent } from './rapportPP/rapport-pp-list/rapport-pp-list.component';
import { RapportPPModiferComponent } from './rapportPP/rapport-pp-modifer/rapport-pp-modifer.component';
import { LoginComponent } from './security/login/login.component';
import { RegisterComponent } from './security/register/register.component';
import { StructureEnteteAjoutComponent } from './structure/structure-entete-ajout/structure-entete-ajout.component';
import { StructureEnteteListComponent } from './structure/structure-entete-list/structure-entete-list.component';
import { StructureEnteteModifComponent } from './structure/structure-entete-modif/structure-entete-modif.component';
import { StructureFinAjoutComponent } from './structure/structure-fin-ajout/structure-fin-ajout.component';
import { StructureFinListComponent } from './structure/structure-fin-list/structure-fin-list.component';
import { StructureFinModifComponent } from './structure/structure-fin-modif/structure-fin-modif.component';
import { StrucureCorpAjoutComponent } from './structure/strucure-corp-ajout/strucure-corp-ajout.component';
import { StrucureCorpListComponent } from './structure/strucure-corp-list/strucure-corp-list.component';
import { StrucureCorpModifComponent } from './structure/strucure-corp-modif/strucure-corp-modif.component';

const routes: Routes = [
  {path: '', redirectTo : 'dashboard' , pathMatch: 'full'},
  {path : 'rejet/rapportOD', component : RapportRejetComponent, canActivate: [AuthGuard]},
  {path : 'rejet/rapportPP', component: RapportPPRejetComponent , canActivate: [AuthGuard]},
  {path : 'rejet/rapportPM', component: RapportPMRejetComponent , canActivate: [AuthGuard]},
  {path : 'rejet/codeErreur', component: CodeErreurListComponent, canActivate: [AuthGuard]},
  {path : 'rejet/codeErreurAjout', component: CodeErreurAjouterComponent, canActivate: [AuthGuard]},
  {path : 'rejet/codeErreurUpdate/:codeErreur', component: CodeErreurModifierComponent, canActivate: [AuthGuard]},
  {path : 'rapport/rapportOD', component: RapportODListComponent, canActivate: [AuthGuard]},
  {path : 'rapport/rapportODAjout', component : RapportODAjouterComponent, canActivate: [AuthGuard]},
  {path : 'rapport/rapportODUpdate/:numDeclaration', component : RapportODModifierComponent, canActivate: [AuthGuard]},
  {path : 'rapport/rapportODDetail/:numDeclaration', component : RapportODDetailComponent, canActivate: [AuthGuard]},
  {path : 'rapport/rapportPP', component : RapportPPListComponent, canActivate: [AuthGuard]},
  {path : 'rapport/rapportPPAjout', component : RapportPPAjoutComponent, canActivate: [AuthGuard]},
  {path : 'rapport/rapportPPUpdate/:numDeclaration', component : RapportPPModiferComponent, canActivate: [AuthGuard]},
  {path : 'rapport/rapportPPDetail/:numDeclaration', component : RapportPPDetailComponent, canActivate: [AuthGuard]},
  {path : 'rapport/rapportPM', component : RapportPMListComponent, canActivate: [AuthGuard]},
  {path : 'rapport/rapportPMAjout', component : RapportPMAjoutComponent, canActivate: [AuthGuard]},
  {path : 'rapport/rapportPMUpdate/:numDeclaration', component : RapportPMModifierComponent, canActivate: [AuthGuard]},
  {path : 'rapport/rapportPMDetail/:numDeclaration', component : RapportPMDetailComponent, canActivate: [AuthGuard]},
  {path : 'structure/corp' , component : StrucureCorpListComponent, canActivate: [AuthGuard]},
  {path : 'structure/corpAdd', component : StrucureCorpAjoutComponent, canActivate: [AuthGuard]},
  {path : 'structure/corpUpdate/:id', component : StrucureCorpModifComponent, canActivate: [AuthGuard]},
  {path : 'structure/entete', component : StructureEnteteListComponent, canActivate: [AuthGuard]},
  {path : 'structure/enteteAdd', component : StructureEnteteAjoutComponent, canActivate: [AuthGuard]},
  {path : 'structure/enteteUpdate/:id' , component : StructureEnteteModifComponent, canActivate: [AuthGuard]},
  {path : 'structure/fin', component : StructureFinListComponent, canActivate: [AuthGuard]},
  {path : 'structure/finAdd', component : StructureFinAjoutComponent, canActivate: [AuthGuard]},
  {path : 'structure/finUpdate/:id' , component : StructureFinModifComponent, canActivate: [AuthGuard]},
  {path : 'dashboard' , component : DashboardComponent, canActivate: [AuthGuard]},
  {path : 'approbation' , component : ApprobationDocumentListComponent, canActivate: [AuthGuard]},
  {path : 'approbationAdd', component : ApprobationDocumentAjoutComponent, canActivate: [AuthGuard]},
  {path : 'approbationUpdate/:id' , component : ApprobationDocumentModifierComponent, canActivate: [AuthGuard]},
  {path : 'declaration' , component : DeclarationListComponent, canActivate: [AuthGuard]},
  {path : 'declarationAdd', component : DeclarationAjouterComponent, canActivate: [AuthGuard]},
  {path : 'declarationUpdate/:id', component : DeclarationModfierComponent, canActivate: [AuthGuard]},
  {path : 'historique', component : HistoriqueModificationListComponent, canActivate: [AuthGuard]},
  {path : 'historiqueAdd', component : HistoriqueModificationNewComponent, canActivate: [AuthGuard]},
  {path : 'historiqueUpdate/:id', component : HistoriqueModificationUpdateComponent, canActivate: [AuthGuard]},
  {path : 'destinataire', component : ListeDestinataireListComponent, canActivate: [AuthGuard]},
  {path : 'destinataireAdd', component : ListeDestinataireNewComponent, canActivate: [AuthGuard]},
  {path : 'destinataireUpdate/:id', component : ListeDestinataireUpdateComponent, canActivate: [AuthGuard]},
  {path : 'archiveOD' , component : ArchiveODComponent, canActivate: [AuthGuard]},
  {path : 'archivePP' , component : ArchivePPComponent, canActivate: [AuthGuard]},
  {path : 'archivePM' , component : ArchivePMComponent, canActivate: [AuthGuard]},
  {path : 'auth' , component : LoginComponent},
  {path : 'signup', component : RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
