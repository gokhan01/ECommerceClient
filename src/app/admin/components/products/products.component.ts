import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Products } from 'src/app/contracts/products';
import { HttpClientService } from 'src/app/services/common/http-client.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent implements OnInit {

  constructor(spinner: NgxSpinnerService, private httpClientService: HttpClientService) {
    super(spinner)
  }

  ngOnInit(): void {
    this.showSpinner(SpinnerType.ballAtom);

    this.httpClientService.get<Products[]>({
      controller: "products"
    }).subscribe(data => console.log(data))

    // this.httpClientService.post({
    //   controller: "products"
    // }, {
    //   name: "Kalem",
    //   stock: 100,
    //   price: 15
    // }).subscribe();

    // this.httpClientService.put({
    //   controller: "products"
    // }, {
    //   id: "a3442733-88cd-4575-ba0a-1a55ee8a4b1a",
    //   name: "Silgi 2",
    //   stock: 500,
    //   price: 2.55
    // }).subscribe();

    // this.httpClientService.delete({
    //   controller: "products"
    // }, "eae4c489-965a-4fd6-a42b-ded08959b218").subscribe();
  }

}
