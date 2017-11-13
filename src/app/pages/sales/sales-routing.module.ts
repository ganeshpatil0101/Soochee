import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalesComponent } from './sales.component';

import { SalesItemComponent } from './add/sales-item.component';

const routes: Routes = [{
  path: '',
  component: SalesComponent,
  children: [{
    path: 'add',
    component: SalesItemComponent,
  } ]
  // }, {
  //   path: 'list',
  //   component: SalesListComponent,
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
export class SalesRoutingModule {

}

export const routedComponents = [
  SalesComponent,
  //SalesListComponent,
  SalesItemComponent,
];
