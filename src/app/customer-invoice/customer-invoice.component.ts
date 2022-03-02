import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-customer-invoice',
  templateUrl: './customer-invoice.component.html',
  styleUrls: ['./customer-invoice.component.css']
})
export class CustomerInvoiceComponent implements OnInit {

  constructor(private service:SharedService) { }
    ItemList:Array<any> = [];
    productID:number = 1;
    productName:String = "Mouse";
    Quantity:number = 0;
    Price:number = 0;
    Total:number = 0;
    NetTotal:number = 0;
    CustomerName:String = "";
    PhoneNumber:String = "";
    Address:String = "";
    NIC:String = "";
    purchaseDate:Date = new Date();
    productList:Array<any> = [];

  ngOnInit(): void {
    this.getProductList();
  }

  addItemToList(){
    var val = {
      productID: this.productID,
      productName: this.productName,
      Quantity: this.Quantity,
      Price: this.Price,
      Total: this.Quantity * this.Price,
    };
    this.ItemList.push(val);
    this.NetTotal += val.Total;
  }

  clearList(){
    this.productName = "";
    this.Price = 0;
    this.Quantity = 0;
    this.NetTotal = 0;
    this.CustomerName = "";
    this.PhoneNumber = "";
    this.Address = "";
    this.NIC = "";
    this.ItemList = [];
  }

  getProductList(){
    this.service.getAllProduct().subscribe(data => {
      this.productList = data;
    });
  }

  savePurchaseDetails(){
    var val = {
      CustomerName: this.CustomerName,
      PhoneNumber: this.PhoneNumber,
      NIC: this.NIC,
      Address: this.Address,
      productList: this.ItemList
    };
    this.service.savePurchaseDetails(val).subscribe(res => {
      alert("Details saved Successfully!");
    });
    this.clearList();
  }

}
