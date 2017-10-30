import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupplierComponent } from './supplier.component';
import { SupplierListComponent } from './list/supplier-list.component';
import { AddSupplierComponent } from './add/add-supplier.component';

const routes: Routes = [{
  path: '',
  component: SupplierComponent,
  children: [{
    path: 'add',
    component: AddSupplierComponent,
  }, {
    path: 'list',
    component: SupplierListComponent,
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
export class SupplierRoutingModule {

}

export const routedComponents = [
  SupplierComponent,
  SupplierListComponent,
  AddSupplierComponent,
];
