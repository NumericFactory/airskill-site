import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { TrustCustomersComponent } from './trust-customers/trust-customers.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { UseCasesComponent } from './use-cases/use-cases.component';
import { SharedModule } from '../shared/shared.module';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ExpertisesComponent } from './expertises/expertises.component';

@NgModule({
  declarations: [
    OnboardingComponent,
    TrustCustomersComponent,
    HomeComponent,
    UseCasesComponent,
    TestimonialsComponent,
    ExpertisesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  exports: [
    CommonModule,
    HomeRoutingModule,
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
