import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(value: number, locale: string, currency: string): string {
    const price = `${value.toLocaleString(locale, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })}`;
    switch (locale.toLowerCase()) {
      case 'ru-ru':
        return `${price} ${currency}`;
      case 'en-us':
        return `${currency}${price}`
      default:
        return `${price} ${currency}`;
    }
  }
}
