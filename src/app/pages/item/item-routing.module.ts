import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemComponent } from './item.component';
import { AddItemComponent } from './add/add-item.component';

const routes: Routes = [{
  path: '',
  component: ItemComponent,
  children: [{
    path: 'add',
    component: AddItemComponent,
  }]
  // }, {
  //   path: 'layouts',
  //   component: FormLayoutsComponent,
  // }],
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
  AddItemComponent,
];
