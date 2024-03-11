import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObservablesRoutingModule } from './observables-routing.module';
import { ObservablesComponent } from './observables.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { MergeMapComponent } from './merge-map/merge-map.component';


@NgModule({
  declarations: [
    ObservablesComponent,
    SwitchMapComponent,
    MergeMapComponent
  ],
  imports: [
    CommonModule,
    ObservablesRoutingModule
  ]
})
export class ObservablesModule { }
