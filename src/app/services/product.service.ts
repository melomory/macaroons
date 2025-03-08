import {Injectable} from '@angular/core';
import {ProductType} from "../types/product.type";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() {
  }

  getProducts(): ProductType[] {
    return [
      {
        imageFileName: 'product1.png',
        imageDescription: 'Макарун с малиной',
        title: 'Макарун с малиной',
        amount: 1,
        price: 1.70
      },
      {
        imageFileName: 'product2.png',
        imageDescription: 'Макарун с манго',
        title: 'Макарун с манго',
        amount: 1,
        price: 1.70
      },
      {
        imageFileName: 'product3.png',
        imageDescription: 'Пирог с ванилью',
        title: 'Пирог с ванилью',
        amount: 1,
        price: 1.70
      },
      {
        imageFileName: 'product4.png',
        imageDescription: 'Пирог с фисташками',
        title: 'Пирог с фисташками',
        amount: 1,
        price: 1.70
      },
    ];
  }
}
