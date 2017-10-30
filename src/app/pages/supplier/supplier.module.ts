import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { SupplierRoutingModule, routedComponents } from './supplier-routing.module';
import { SmartTableService } from '../../@core/data/smart-table.service';
@NgModule({
  imports: [
    ThemeModule,
    SupplierRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
    SmartTableService,
  ],
})
export class SupplierModule { }
