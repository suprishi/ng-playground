import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveComponent } from './reactive/reactive.component';

const routes: Routes = [
  { path: '', component: FormsComponent },
  { path: 'template-driven-forms', component: TemplateDrivenComponent },
  { path: 'reactive-forms', component: ReactiveComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormsRoutingModule {}
