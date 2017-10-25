import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { ItemRoutingModule, routedComponents } from './item-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    ItemRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class ItemModule { }
