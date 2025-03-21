import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'phoneFormat'
})
export class PhoneFormatPipe implements PipeTransform {
  transform(value: string, template?: string): string {
    if (!value || value.length !== 12) {
      return value;
    }

    return `+${value.slice(0,3)} (${value.slice(3,5)}) ${value.slice(5,8)}-${value.slice(8,10)}-${value.slice(10,12)}`;
  }
}
