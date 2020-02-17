import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { HeroesComponent } from '../heroes/heroes.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { TestComponent } from '../test/test.component';

const routes : Routes = [
  {path : 'heroes' ,  component : HeroesComponent},
  {path : 'dashboard' ,  component : DashboardComponent},
  {path : '', redirectTo : 'dashboard' ,  pathMatch : 'full'},
  {path : 'details/:id' , component : HeroDetailComponent},
  {path : 'test' , component : TestComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
    // RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }