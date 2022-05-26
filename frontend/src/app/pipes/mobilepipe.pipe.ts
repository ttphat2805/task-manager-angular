import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mobilepipe'
})
export class MobilepipePipe implements PipeTransform {

  transform(value: string) : string{
    if(value.length >=3){
      return value.substring(0, 3) + '***';
    }
    return value;
  }

}
