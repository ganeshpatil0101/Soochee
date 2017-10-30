import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SupplierService } from '../../../@core/data/supplier.service';

@Component({
  selector: 'ngx-supplier-list',
  templateUrl: './supplier-list.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class SupplierListComponent {
  public settings = {
    actions:{
      add:false,
      edit:false,
      position:'right'
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'Id',
        type: 'number',
      },
      name: {
        title: 'Name',
        type: 'string',
      },
      address: {
        title: 'Address',
        type: 'string',
      },
      cnumber: {
        title: 'Contact No',
        type: 'number',
      }
    },
  };

  public source: LocalDataSource = new LocalDataSource();

  constructor(private service: SupplierService) {
    const data = this.service.getData();
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
