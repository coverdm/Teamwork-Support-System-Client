import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'basicRole'
})
export class BasicRolePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    
    console.log(value);

    if (value) {
      let transformed = value.replace('_', ' ');
      
      console.log(transformed);

      transformed.charAt(0).toUpperCase();

      console.log(transformed);

      return transformed;
    }
    
    return 'niet';
  }

}
