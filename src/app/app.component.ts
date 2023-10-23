import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Airskill est une plateforme de formation en ligne qui vous permet de vous former à votre rythme et à votre convenance.';


  text: string = 'Tech_';
  carouselList = [
    'Tech_', 'Développement web_', 'UxDesign_', 'I.A_', 'Data_'
  ];

  ngOnInit() {
  }


}
