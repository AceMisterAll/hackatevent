import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InitiationPageRoutingModule } from './initiation-routing.module';

import { InitiationPage } from './initiation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InitiationPageRoutingModule
  ],
  declarations: [InitiationPage]
})
export class InitiationPageModule {}
