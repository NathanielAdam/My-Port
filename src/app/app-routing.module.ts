import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SoftSkillsComponent } from './components/soft-skills/soft-skills.component';
import { TechSkillsComponent } from './components/tech-skills/tech-skills.component';

const routes: Routes = [
  {path:'about', component:AboutComponent},
  {path:'techskills', component:TechSkillsComponent},
  {path:'softskills', component:SoftSkillsComponent},
  {path:'projects', component:ProjectsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }