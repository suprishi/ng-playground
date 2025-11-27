import { Component, inject } from '@angular/core';
import { MenuItem } from './menu-item.model';
import { Router } from '@angular/router';

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  route: string;
  level: number;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  router = inject(Router);
  menu: MenuItem[] = [
    {
      name: 'Observables',
      route: 'observables',
      children: [
        {
          name: 'SwitchMap',
          route: 'observables/switch-map',
        },
        {
          name: 'MergeMap',
          route: 'observables/merge-map',
        },
      ],
    },
    {
      name: 'Forms',
      route: 'forms',
      children: [
        {
          name: 'Template Driven Forms',
          route: 'forms/template-driven-forms',
        },
        {
          name: 'Reactive Forms',
          route: 'forms/reactive-forms',
        },
      ],
    },
  ];

  navigateTo(menuItemSection: MenuItem) {
    this.router.navigate([menuItemSection.route]);
  }
}
