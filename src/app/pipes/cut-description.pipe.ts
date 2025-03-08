import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'cutDescription'
})
export class CutDescriptionPipe implements PipeTransform {
  transform(value: string, length: number = 95): string {
    return `${value && value.length > length ? value.substring(0, length) + '...' : value}`;
  }
}
