import { Component, ViewChild } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableService } from '../../../@core/data/smart-table.service';
import { DataTable, DataTableTranslations, DataTableResource } from 'angular-2-data-table';

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
   private dataTableResource;

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
       category: {
        title: 'Category',
        type: 'string',
        filter: false,
      },
        altNo: {
        title: 'Alternative No',
        type: 'string',
        filter: false,
      },  qty: {
        title: 'Qty',
        type: 'number',
        filter: false,
      },  weight: {
        title: 'Weight',
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

  itemdetails =[{qty: 100, location: 'ITR-10', supplier: 'Supplier1' , price: 20},
 {qty: 10, location: 'ITR-G', supplier: 'Supplier2' , price: 40}
 , { qty: 20, location: 'ITR-w', supplier: 'Supplier3' , price: 30}];

    data = [{
    partNo: 1,
    partName: 'test Item' ,
    description: 'test item',
    machineModel: 'model 1',
    price: 250,
    supplier: 'supplier 1',
    date: '27/10/2017',
    hsnCode: 123123,
      quantity: 1,
         noOfItems: 1,
  },
  {
    partNo: 2,
       partName: 'test Item2' ,
    description: 'test item 2',
    machineModel: 'model 2',
    price: 300,
    supplier: 'supplier 2',
    date: '27/10/2017',
      hsnCode: 123123,
         noOfItems: 1,
        quantity: 1,
  },
  {
    partNo: 3,
       partName: 'test Item3' ,
    description: 'test item 3',
    machineModel: 'model 3',
    price: 350,
    supplier: 'supplier 3',
    date: '27/10/2017',
      hsnCode: 123123,
         noOfItems: 4,
        quantity: 1,
  },
  {
    partNo: 4,
       partName: 'test Item4' ,
    description: 'test item 4',
    machineModel: 'model 4',
    price: 500,
    supplier: 'supplier 4',
    date: '27/10/2017',
    hsnCode: 123123,
       noOfItems: 3,
    quantity: 1,
  },
  {
    partNo: 5,
       partName: 'test Item5' ,
    description: 'test item 5',
    machineModel: 'model 5',
    price: 400,
    supplier: 'supplier 5',
    date: '27/10/2017',
    hsnCode: 123123,
       noOfItems: 1,
      quantity: 1,
  },
  {
    partNo: 6,
       partName: 'test Item6' ,
    description: 'test item 6',
    machineModel: 'model 6',
    price: 600,
    supplier: 'supplier 6',
    date: '27/10/2017',
    hsnCode: 123123,
    noOfItems: 2,
      quantity: 1,
  },
  ];



  public source: LocalDataSource = new LocalDataSource();
 @ViewChild(DataTable) carsTable: DataTable;
  constructor(private service: SmartTableService) {
    // const data = this.service.getData();
    // this.source.load(data);
       this.dataTableResource = new DataTableResource(this.data);
  }


  onSearch(query: string = '') {
    this.dataTableResource.query(query);
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
