import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableService } from '../../../@core/data/smart-table.service';

@Component({
  selector: 'ngx-item-list',
  templateUrl: './item-list.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class ItemListComponent {
  /*    
    */
  public settings = {
    actions: {
      add: false,
      edit: false,
      position: 'right',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    }, edit: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      partNo: {
        title: 'Part No',
        type: 'number',
        filter: false,
      },
      description: {
        title: 'Description',
        type: 'string',
        filter: false,
      },
      machineModel: {
        title: 'Machine Model',
        type: 'string',
        editable: true,
        filter: false,
      },
      price: {
        title: 'Price ($)',
        type: 'number',
        filter: false,
      },
      supplier: {
        title: 'Supplier',
        type: 'string',
        filter: false,
      },
      date: {
        title: 'Date',
        type: 'string',
        filter: false,
      },
    },
  };



  public source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableService) {
    const data = this.service.getData();
    this.source.load(data);
  }

  onSearch(query: string = '') {
    this.source.setFilter([
      // fields we want to inclue in the search
      {
        field: 'partNo',
        search: query,
      },
      {
        field: 'description',
        search: query,
      },
      {
        field: 'machineModel',
        search: query,
      },
      {
        field: 'supplier',
        search: query,
      },
    ], false);
    // second parameter specifying whether to perform 'AND' or 'OR' search
    // (meaning all columns should contain search query or at least one)
    // 'AND' by default, so changing to 'OR' by setting false here
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
