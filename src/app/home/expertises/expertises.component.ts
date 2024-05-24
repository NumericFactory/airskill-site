import { Component } from '@angular/core';

@Component({
  selector: 'app-expertises',
  templateUrl: './expertises.component.html',
  styleUrls: ['./expertises.component.scss']
})
export class ExpertisesComponent {

  expertises = [
    { 
      name: 'Développement web & mobile', 
      icon: 'fab fa-angular', 
      description: `De la définition du besoin à la validation fonctionnelle,nos experts et formateurs vous accompagnent.
      Apprendre à développez des applications métiers sur-mesure avec notre équipe sur les technologies web
      Maintenez et optimisez vos applications avec une équipe dédiée` },
    { 
      name: 'Cloud & Devops', 
      icon: 'fab fa-angular', 
      description: `` },
    { 
      name: 'Pilotage et Gestion de projet', 
      icon: 'fab fa-angular', 
      description: `` },
    { 
      name: 'Data et innovation', 
      icon: 'fab fa-angular', 
      description: `` },
    { 
      name: 'IA', 
      icon: 'fab fa-angular', 
      description: `` },
  ]

}
