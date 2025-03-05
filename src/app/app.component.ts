import {Component} from '@angular/core';
import {FeatureType} from "./types/feature.type";
import {ProductType} from "./types/product.type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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

  public products: ProductType[] = [
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

  public showPresent: boolean = true;

  public  phoneNumber: string = '+375 (29) 368-98-68';

  public instagramLink: string = 'instagram-link'

  public formValues = {
    productTitle: '',
    personName: '',
    phone: ''
  };

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: 'smooth'});
  }

  public addToCart(product: ProductType, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValues.productTitle = product.title.toUpperCase();
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
    return phoneNumber.replace(/[\s()-]/g, '');
  }
}
