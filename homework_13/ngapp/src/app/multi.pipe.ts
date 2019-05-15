import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multi'
})
export class MultiPipe implements PipeTransform {

  transform(value: any, args?: any): any {   
   
    let result = value;
    if(args){
       for (let i = 1; i < args; i++) {
        result = result + " "+ value;
       }
    }
    return result;
  }

}
