import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { ItemRoutingModule, routedComponents } from './item-routing.module';
import { SmartTableService } from '../../@core/data/smart-table.service';
@NgModule({
  imports: [
    ThemeModule,
    ItemRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
    SmartTableService,
  ],
})
export class ItemModule { }
