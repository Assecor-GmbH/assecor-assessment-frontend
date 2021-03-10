import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'find-url'
})

export class FindUrlPipe implements PipeTransform {
  transform(value: string): any {
    return value.replace('http://swapi.dev/api', '');
  }
}
