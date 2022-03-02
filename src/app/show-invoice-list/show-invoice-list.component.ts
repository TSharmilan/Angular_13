import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-show-invoice-list',
  templateUrl: './show-invoice-list.component.html',
  styleUrls: ['./show-invoice-list.component.css']
})
export class ShowInvoiceListComponent implements OnInit {

  constructor(private service:SharedService) { }
    CustomerName:String = "";
    PhoneNumber:String = "";
    PurchaseDate:Date = new Date();
    purchaseDetailsList:Array<any> = [];

  ngOnInit(): void {
    this.getPurchaseDetailsList();
  }

  getPurchaseDetailsList(){
    this.service.getAllInvoice().subscribe(data => {
      this.purchaseDetailsList = data;
    });
  }

}
