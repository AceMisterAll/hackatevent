import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { favorisPage } from './favoris.page';

const routes: Routes = [
  {
    path: '',
    component: favorisPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class favorisPageRoutingModule {}
