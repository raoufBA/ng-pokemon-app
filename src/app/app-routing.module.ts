import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPokementComponent } from './list-pokement/list-pokement.component';
import { DetailPokementComponent } from './detail-pokement/detail-pokement.component';

const routes: Routes = [
  { path: 'pokements', component: ListPokementComponent },
  { path: 'pokement/:id', component: DetailPokementComponent },
  { path: '', redirectTo: 'pokements', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
