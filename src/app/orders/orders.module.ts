import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrderListComponent } from './order-list/order-list.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatTableModule} from '@angular/material';
import {ChartsModule} from "ng2-charts";
import { MatButtonModule } from "@angular/material";

@NgModule({
  declarations: [OrderListComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    MatTableModule,
    FlexLayoutModule,
    ChartsModule,
    MatButtonModule
  ]
})
export class OrdersModule { }
