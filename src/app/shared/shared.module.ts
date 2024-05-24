import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimonialComponent } from './testimonial/testimonial.component';

import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    TestimonialComponent
  ],
  exports: [
    CommonModule,
    TestimonialComponent
  ]

})
export class SharedModule { }
