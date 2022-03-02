import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerInvoiceComponent } from './customer-invoice/customer-invoice.component';
import { ShowInvoiceListComponent } from './show-invoice-list/show-invoice-list.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule} from '@angular/common/http';
import { NgxPrintModule} from 'ngx-print';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedService } from './shared.service';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    CustomerInvoiceComponent,
    ShowInvoiceListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    NgxPrintModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
