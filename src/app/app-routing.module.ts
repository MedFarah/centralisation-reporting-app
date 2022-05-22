import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RapportRejetComponent } from './components/rapport-rejet/rapport-rejet.component';
import { RapportPMRejetComponent } from './rapport-pmrejet/rapport-pmrejet.component';
import { RapportPPRejetComponent } from './rapport-pp-rejet/rapport-pp-rejet.component';

const routes: Routes = [
  {path : 'rejet/rapportOD', component : RapportRejetComponent},
  {path : 'rejet/rapportPP', component: RapportPPRejetComponent},
  {path : 'rejet/rapportPM', component: RapportPMRejetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
