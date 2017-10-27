import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemComponent } from './item.component';
import { ItemListComponent } from './item-list/item-list.component';
import { AddItemComponent } from './add/add-item.component';

const routes: Routes = [{
  path: '',
  component: ItemComponent,
  children: [{
    path: 'add',
    component: AddItemComponent,
  }, {
    path: 'list',
    component: ItemListComponent,
  }],
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class ItemRoutingModule {

}

export const routedComponents = [
  ItemComponent,
  ItemListComponent,
  AddItemComponent,
];
