import { Component, ViewChild } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { DataTable, DataTableTranslations, DataTableResource } from 'angular-2-data-table';

@Component({
  selector: 'ngx-add-sales',
  styleUrls: ['./sales-item.component.scss'],
  templateUrl: './sales-item.component.html',
})
export class SalesItemComponent {
  total: number = 0;
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
      partName: {
        title: 'Part Name',
        type: 'string',
        filter: false,
      },
      noOfItems: {
        title: 'No of items',
        type: 'string',
        editable: true,
        filter: false,
      },
      quantity: {
        title: 'Quantity',
        type: 'string',
        editable: true,
        filter: false,
      },
      price: {
        title: 'Price (₹)',
        type: 'number',
        filter: false,
      },
      supplier: {
        title: 'Supplier',
        type: 'string',
        editable: true,
        filter: false,
      },
      date: {
        title: 'Date',
        type: 'string',
        filter: false,
      },
    },
  };

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
  // {
  //   partNo: 4,
  //      partName: 'test Item4' ,
  //   description: 'test item 4',
  //   machineModel: 'model 4',
  //   price: 500,
  //   supplier: 'supplier 4',
  //   date: '27/10/2017',
  //   hsnCode: 123123,
  //      noOfItems: 3,
  //   quantity: 1,
  // },
  // {
  //   partNo: 5,
  //      partName: 'test Item5' ,
  //   description: 'test item 5',
  //   machineModel: 'model 5',
  //   price: 400,
  //   supplier: 'supplier 5',
  //   date: '27/10/2017',
  //   hsnCode: 123123,
  //      noOfItems: 1,
  //     quantity: 1,
  // },
  // {
  //   partNo: 6,
  //      partName: 'test Item6' ,
  //   description: 'test item 6',
  //   machineModel: 'model 6',
  //   price: 600,
  //   supplier: 'supplier 6',
  //   date: '27/10/2017',
  //   hsnCode: 123123,
  //   noOfItems: 2,
  //     quantity: 1,
  // },
  ];

   public source: LocalDataSource = new LocalDataSource();
   private dataTableResource;
 @ViewChild(DataTable) carsTable: DataTable;

   constructor() {
        this.dataTableResource = new DataTableResource(this.data);
   }

   supplierSelected(item) {
    item.price = item.price + 10;
   }

   getTotal() {
     this.total = 0;
     this.data.forEach(element => {
       this.total = this.total + element.price;
     });
     return this.total;
   }
}
