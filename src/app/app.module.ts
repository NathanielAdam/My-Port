import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { SoftSkillsComponent } from './components/soft-skills/soft-skills.component';
import { TechSkillsComponent } from './components/tech-skills/tech-skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectDisplayComponent } from './components/project-display/project-display.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    AboutComponent,
    SoftSkillsComponent,
    TechSkillsComponent,
    ProjectsComponent,
    ProjectDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
