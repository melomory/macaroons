import {Component, OnInit} from '@angular/core';
import {FeatureType} from "./types/feature.type";
import {ProductType} from "./types/product.type";
import {CartService} from "./services/cart.service";
import {ProductService} from "./services/product.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public features: FeatureType[] = [
    {
      title: 'Лучшие\u00A0продукты',
      description: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не\u00A0используем консерванты, ароматизаторы и красители.'
    },
    {
      title: 'Много вкусов',
      description: 'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.'
    },
    {
      title: 'Бисквитное тесто',
      description: "Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!"
    },
    {
      title: 'Честный продукт',
      description: 'Вкус, качество и безопасность\u00A0наших пирогов подтверждена декларацией о соответствии, которую мы получили\u00A022.06.2016\u00A0г.'
    },
  ];

  public products: ProductType[] = [];

  public showCart: boolean = true;

  public phoneNumber: string = '375293689868';

  public instagramLink: string = 'instagram-link'

  public formValues = {
    productTitle: '',
    personName: '',
    phone: ''
  };

  constructor(private cartService: CartService, private productService: ProductService) {
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: 'smooth'});
  }

  public addToCart(title: string, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValues.productTitle = title.toUpperCase();
    alert(`${title} добавлен в корзину!`)
  }

  public createOrder(): void {
    if (!this.formValues.productTitle) {
      alert('Заполните макарун');
      return;
    }

    if (!this.formValues.personName) {
      alert('Заполните имя');
      return;
    }

    if (!this.formValues.phone) {
      alert('Заполните телефон');
      return;
    }

    alert('Спасибо за заказ');

    this.formValues = {
      productTitle: '',
      personName: '',
      phone: ''
    }
  }

  public normalizePhoneNumber(phoneNumber: string) {
    return `+${phoneNumber.replace(/[\s()-]/g, '')}`;
  }

  public getCartTotalSum() {
    return this.cartService.totalSum;
  }

  public getCartProductCount() {
    return this.cartService.productCount;
  }
}
