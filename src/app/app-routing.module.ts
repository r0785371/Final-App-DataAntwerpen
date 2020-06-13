import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParkandrideListComponent } from './components/parkandride-list/parkandride-list.component';
import { ParkandridedetailsListComponent } from './Components/parkandridedetails-list/parkandridedetails-list.component';

const routes: Routes = [
  { path: 'parkandride', component: ParkandrideListComponent },
  { path: 'parkandridedetail', component: ParkandridedetailsListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  ParkandrideListComponent,
  ParkandridedetailsListComponent,
];
