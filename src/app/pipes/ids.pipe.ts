import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iDS'
})
export class IDSPipe implements PipeTransform {

  transform(name: string): string {

    return name.replace(/[^\A-Z]/g,'').replace(/(.{2})/g,'$1-') ;
  }

}
