import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservablesComponent } from './observables.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { MergeMapComponent } from './merge-map/merge-map.component';

const routes: Routes = [
  {
    path: '',
    component: ObservablesComponent,
  },
  {
    path: 'switch-map',
    component: SwitchMapComponent,
  },
  {
    path: 'merge-map',
    component: MergeMapComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObservablesRoutingModule {}
