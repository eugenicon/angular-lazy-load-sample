import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SharedModule} from './shared/shared.module';
import {CustomersModule} from './customers/customers.module';
import {CustomerListComponent} from './customers/customer-list/customer-list.component';
import {OrderListComponent} from './orders/order-list/order-list.component';
import {OrdersModule} from './orders/orders.module';

const routes: Routes = [
  {path: 'customers', loadChildren: './customers/customers.module#CustomersModule'},
  {path: 'orders', loadChildren: './orders/orders.module#OrdersModule'},
  //{path: 'orders', component: OrderListComponent},
  //{path: 'customers', component: CustomerListComponent},
  {path: '', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    //CustomersModule,
    //OrdersModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
