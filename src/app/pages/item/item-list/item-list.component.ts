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
      partNo: {
        title: 'Part No',
        type: 'number',
      },
      description: {
        title: 'Description',
        type: 'string',
      },
      machineModel: {
        title: 'Machine Model',
        type: 'string',
      },
      price: {
        title: 'Price ($)',
        type: 'number',
      },
      supplier: {
        title: 'Supplier',
        type: 'string',
      },
      date: {
        title: 'Date',
        type: 'string',
      },
    },
  };

  public source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableService) {
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
