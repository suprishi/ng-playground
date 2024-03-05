import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [LayoutComponent, MenuComponent],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
