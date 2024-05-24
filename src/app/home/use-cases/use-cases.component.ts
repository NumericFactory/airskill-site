import { Component } from '@angular/core';

@Component({
  selector: 'app-use-cases',
  templateUrl: './use-cases.component.html',
  styleUrls: ['./use-cases.component.scss']
})
export class UseCasesComponent {

  testimonial = {
    title: 'Notre mission',
    name: 'Frederic Lossignol',
    company: 'CEO Airskill',
    imageUrl: 'assets/profils/profile-pic.png',
    description: `<strong>Notre mission est de vous accompagner</strong> dans la réussite de vos projets.
    Nous prenons en charge 2 problématiques : le recrutement
    d'expert<b>.</b>es, et la mise en place de parcours de formation
    tech.`,
  }

}
