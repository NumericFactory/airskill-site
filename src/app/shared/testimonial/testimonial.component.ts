import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent {
  @Input() title?: string;
  @Input() name?: string;
  @Input() company?: string;
  @Input() description?: string;
  @Input() imageUrl?: string;

}
