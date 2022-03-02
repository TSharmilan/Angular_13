import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CustomerInvoiceComponent} from './customer-invoice/customer-invoice.component';
import {ShowInvoiceListComponent} from './show-invoice-list/show-invoice-list.component';

const routes: Routes = [
  {path: 'customerInvoice', component: CustomerInvoiceComponent},
  {path: 'showInvoiceList', component: ShowInvoiceListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
