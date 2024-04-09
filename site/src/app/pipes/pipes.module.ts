import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from './truncate.pipe';
import { ImagePipe } from './image.pipe';



@NgModule({
  declarations: [
    TruncatePipe,
    ImagePipe
  ],
  exports: [
    TruncatePipe,
    ImagePipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
