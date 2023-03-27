import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InscrireatelierPage } from './inscrireatelier.page';

const routes: Routes = [
  {
    path: '',
    component: InscrireatelierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InscrireatelierPageRoutingModule {}
