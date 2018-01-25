import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'basicRole'
})
export class BasicRolePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
