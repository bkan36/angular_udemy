import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false // for "recalculate" the pipe at each change of data
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterStr: string, propName: string): any {
    if (value.length === 0 || filterStr === '') {
      return value;
    }

    const resArr = [];
    for (const item of value) {
      if (item[propName] === filterStr) {
        resArr.push(item);
      }
    }
    return resArr;
  }
}
