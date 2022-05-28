import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodeErreurAjouterComponent } from './codeErreurBCT/code-erreur-ajouter/code-erreur-ajouter.component';
import { CodeErreurListComponent } from './codeErreurBCT/code-erreur-list/code-erreur-list.component';
import { CodeErreurModifierComponent } from './codeErreurBCT/code-erreur-modifier/code-erreur-modifier.component';
import { RapportRejetComponent } from './components/rapport-rejet/rapport-rejet.component';
import { RapportPMRejetComponent } from './rapport-pmrejet/rapport-pmrejet.component';
import { RapportPPRejetComponent } from './rapport-pp-rejet/rapport-pp-rejet.component';
import { RapportODAjouterComponent } from './rapportOD/rapport-od-ajouter/rapport-od-ajouter.component';
import { RapportODListComponent } from './rapportOD/rapport-od-list/rapport-od-list.component';
import { RapportODModifierComponent } from './rapportOD/rapport-od-modifier/rapport-od-modifier.component';

const routes: Routes = [
  {path : 'rejet/rapportOD', component : RapportRejetComponent},
  {path : 'rejet/rapportPP', component: RapportPPRejetComponent},
  {path : 'rejet/rapportPM', component: RapportPMRejetComponent},
  {path : 'rejet/codeErreur', component: CodeErreurListComponent},
  {path : 'rejet/codeErreurAjout', component: CodeErreurAjouterComponent},
  {path : 'rejet/codeErreurUpdate/:codeErreur', component: CodeErreurModifierComponent},
  {path : 'rapport/rapportOD', component: RapportODListComponent},
  {path : 'rapport/rapportODAjout', component : RapportODAjouterComponent},
  {path : 'rapport/rapportODUpdate/:numDeclaration', component : RapportODModifierComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
