import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { favorisPage } from './favoris.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { favorisPageRoutingModule } from './favoris-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    favorisPageRoutingModule
  ],
  declarations: [favorisPage]
})
export class favorisPageModule {}
