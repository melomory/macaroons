import {Injectable} from '@angular/core';
import {ProductType} from "../types/product.type";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _productCount: number = 0;
  private _totalSum: number = 0;

  public products: ProductType[] = [];

  public get totalSum() {
    return this._totalSum;
  }
  public get productCount() {
    return this._productCount;
  }


  constructor() {
  }

  addProduct(product: ProductType) {
    this.products.push(product);
    this._totalSum += product.price;
    this._productCount++;
  }
}
