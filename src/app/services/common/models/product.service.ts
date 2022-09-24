import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Create_Product } from 'src/app/contracts/create_product';
import { List_Product } from 'src/app/contracts/list_product';
import { HttpClientService } from '../http-client.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClientService: HttpClientService) { }

  create(product: Create_Product, successCallBack?: any, errorCallback?: (message: string) => void) {
    this.httpClientService.post({
      controller: "products"
    }, product)
      .subscribe({
        next: (v) => successCallBack(),
        error: (e: HttpErrorResponse) => {
          const _error: Array<{ key: string, value: Array<string> }> = e.error;
          let message = "";
          _error.forEach((v, index) => {
            v.value.forEach((_v, index) => {
              message += `${_v}<br>`;
            });
          });

          if (typeof errorCallback === 'function')
            errorCallback(message);
        },
        complete: () => console.info('complete')
      });
  }

  async read(page: number = 0, size: number = 5, successCallBack?: () => void, errorCallback?: (errorMessage: string) => void)
  : Promise<{ totalCount: number, products: List_Product[] }> {
    
    const observable = this.httpClientService.get<{ totalCount: number, products: List_Product[] }>({
      controller: "products",
      queryString: `page=${page}&size=${size}`
    });

    const promiseData: Promise<{ totalCount: number, products: List_Product[] }> = lastValueFrom(observable);

    promiseData.then(p => typeof successCallBack === 'function' && successCallBack())
      .catch((e: HttpErrorResponse) => typeof errorCallback === 'function' && errorCallback(e.message))

    return await promiseData;
  }
}
