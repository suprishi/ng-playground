import { Component } from '@angular/core';
import { MenuItem } from './menu-item.model';
import { FlatTreeControl } from '@angular/cdk/tree';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';

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
  private _transformer = (node: MenuItem, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      route: node.route,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    (node) => node.level,
    (node) => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = this.menu;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}
