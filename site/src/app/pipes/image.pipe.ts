import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(id: string, collection:string): string {
    return `${ URL }/${ collection }/${ id }?random=${Math.random()}`;
  }

}
