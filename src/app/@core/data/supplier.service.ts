import { Injectable } from '@angular/core';

@Injectable()
export class SupplierService {

  data = [{
    id: 1,
    name: 'supplier 1',
    address: 'test address',
    cnumber: 9988221144,    
  },{
    id: 2,
    name: 'supplier 2',
    address: 'test address',
    cnumber: 9988221144,    
  },{
    id: 3,
    name: 'supplier 3',
    address: 'test address',
    cnumber: 9988221144,    
  },{
    id: 4,
    name: 'supplier 4',
    address: 'test address',
    cnumber: 9988221144,    
  },{
    id: 5,
    name: 'supplier 5',
    address: 'test address',
    cnumber: 9988221144,    
  }];

  getData() {
    return this.data;
  }
}
