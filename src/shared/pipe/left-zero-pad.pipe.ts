import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'leftZeroPad'
})
export class LeftZeroPadPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): string {
    let toReturn = "";
    if (typeof value === 'number') {
      toReturn = value.toString(10)
    }

    if (toReturn.length == 0) {
      return toReturn.padStart(2, '0');
    }

    if(toReturn.length == 1) {
      return toReturn.padStart(2, '0');
    }

    return toReturn;
  }

}
