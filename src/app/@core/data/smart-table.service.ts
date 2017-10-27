import { Injectable } from '@angular/core';

@Injectable()
export class SmartTableService {

  data = [{
    partNo: 1,
    description: 'test item',
    machineModel: 'model 1',
    price: 3215,
    supplier: 'supplier 1',
    date: '27/10/2017',
  },
  {
    partNo: 2,
    description: 'test item 2',
    machineModel: 'model 2',
    price: 3215,
    supplier: 'supplier 2',
    date: '27/10/2017',
  },
  {
    partNo: 3,
    description: 'test item 3',
    machineModel: 'model 3',
    price: 3215,
    supplier: 'supplier 3',
    date: '27/10/2017',
  },
  {
    partNo: 4,
    description: 'test item 4',
    machineModel: 'model 4',
    price: 3215,
    supplier: 'supplier 4',
    date: '27/10/2017',
  },
  {
    partNo: 5,
    description: 'test item 5',
    machineModel: 'model 5',
    price: 3215,
    supplier: 'supplier 5',
    date: '27/10/2017',
  },
  {
    partNo: 6,
    description: 'test item 6',
    machineModel: 'model 6',
    price: 3215,
    supplier: 'supplier 6',
    date: '27/10/2017',
  },];

  getData() {
    return this.data;
  }
}
