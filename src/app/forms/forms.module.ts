import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule as Forms, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormsComponent,
    TemplateDrivenComponent,
    ReactiveComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    SharedModule,
    Forms,
    ReactiveFormsModule
  ]
})
export class FormsModule { }
