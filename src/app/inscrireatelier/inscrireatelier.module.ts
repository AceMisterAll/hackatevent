import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InscrireatelierPageRoutingModule } from './inscrireatelier-routing.module';

import { InscrireatelierPage } from './inscrireatelier.page';

import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    InscrireatelierPageRoutingModule,
    RouterModule.forChild([
      {
        path: '',
        component: InscrireatelierPage
      }
    ])
  ],
  declarations: [InscrireatelierPage]
})
export class InscrireatelierPageModule {}
