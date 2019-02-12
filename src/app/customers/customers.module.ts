import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import {MatTableModule} from '@angular/material/table';
import {FlexLayoutModule} from "@angular/flex-layout";
import { MatCardModule, MatIconModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';


@NgModule({
  declarations: [CustomerListComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    MatTableModule,
    FlexLayoutModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class CustomersModule { }
