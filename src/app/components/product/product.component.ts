import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductType} from "../../types/product.type";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product!: ProductType;
  @Output() addToCartEvent: EventEmitter<string> = new EventEmitter<string>();
  constructor(private  cartService: CartService) { }

  ngOnInit(): void {
  }

  addProductToCart(): void {
    this.cartService.addProduct(this.product);
    this.addToCartEvent.emit(this.product.title);
  }
}
