import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodeErreurAjouterComponent } from './codeErreurBCT/code-erreur-ajouter/code-erreur-ajouter.component';
import { CodeErreurListComponent } from './codeErreurBCT/code-erreur-list/code-erreur-list.component';
import { CodeErreurModifierComponent } from './codeErreurBCT/code-erreur-modifier/code-erreur-modifier.component';
import { RapportRejetComponent } from './components/rapport-rejet/rapport-rejet.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { ApprobationDocumentListComponent } from './declarations/approbation-document-list/approbation-document-list.component';
import { DeclarationListComponent } from './declarations/declaration-list/declaration-list.component';
import { HistoriqueModificationListComponent } from './declarations/historique-modification-list/historique-modification-list.component';
import { ListeDestinataireListComponent } from './declarations/liste-destinataire-list/liste-destinataire-list.component';
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
  {path : 'rejet/rapportOD', component : RapportRejetComponent},
  {path : 'rejet/rapportPP', component: RapportPPRejetComponent},
  {path : 'rejet/rapportPM', component: RapportPMRejetComponent},
  {path : 'rejet/codeErreur', component: CodeErreurListComponent},
  {path : 'rejet/codeErreurAjout', component: CodeErreurAjouterComponent},
  {path : 'rejet/codeErreurUpdate/:codeErreur', component: CodeErreurModifierComponent},
  {path : 'rapport/rapportOD', component: RapportODListComponent},
  {path : 'rapport/rapportODAjout', component : RapportODAjouterComponent},
  {path : 'rapport/rapportODUpdate/:numDeclaration', component : RapportODModifierComponent},
  {path : 'rapport/rapportODDetail/:numDeclaration', component : RapportODDetailComponent},
  {path : 'rapport/rapportPP', component : RapportPPListComponent},
  {path : 'rapport/rapportPPAjout', component : RapportPPAjoutComponent},
  {path : 'rapport/rapportPPUpdate/:numDeclaration', component : RapportPPModiferComponent},
  {path : 'rapport/rapportPPDetail/:numDeclaration', component : RapportPPDetailComponent},
  {path : 'rapport/rapportPM', component : RapportPMListComponent},
  {path : 'rapport/rapportPMAjout', component : RapportPMAjoutComponent},
  {path : 'rapport/rapportPMUpdate/:numDeclaration', component : RapportPMModifierComponent},
  {path : 'rapport/rapportPMDetail/:numDeclaration', component : RapportPMDetailComponent},
  {path : 'structure/corp' , component : StrucureCorpListComponent},
  {path : 'structure/corpAdd', component : StrucureCorpAjoutComponent},
  {path : 'structure/corpUpdate/:id', component : StrucureCorpModifComponent},
  {path : 'structure/entete', component : StructureEnteteListComponent},
  {path : 'structure/enteteAdd', component : StructureEnteteAjoutComponent},
  {path : 'structure/enteteUpdate/:id' , component : StructureEnteteModifComponent},
  {path : 'structure/fin', component : StructureFinListComponent},
  {path : 'structure/finAdd', component : StructureFinAjoutComponent},
  {path : 'structure/finUpdate/:id' , component : StructureFinModifComponent},
  {path : 'dashboard' , component : DashboardComponent},
  {path : 'approbation' , component : ApprobationDocumentListComponent},
  {path : 'declaration' , component : DeclarationListComponent},
  {path : 'historique', component : HistoriqueModificationListComponent},
  {path : 'destinataire', component : ListeDestinataireListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
