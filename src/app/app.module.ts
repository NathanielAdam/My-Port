import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { SoftSkillsComponent } from './components/soft-skills/soft-skills.component';
import { TechSkillsComponent } from './components/tech-skills/tech-skills.component';
import { ProjectsComponent } from './components/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    AboutComponent,
    SoftSkillsComponent,
    TechSkillsComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
