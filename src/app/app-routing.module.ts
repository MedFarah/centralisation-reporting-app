import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RapportRejetComponent } from './components/rapport-rejet/rapport-rejet.component';

const routes: Routes = [
  {path : 'rapport', component : RapportRejetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
