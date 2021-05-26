import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  selected:any
  notSelected:any
  constructor(
    private routes:Router
  ) { }
  location:String | undefined
  navItems= [
    {
      title:"About",
      icon:"home",
      link:"/about",
      color:"red"
    },
    {
      title:"Tech Skills",
      icon:"home",
      link:"/techskills",
      color:"red"
    },
    {
      title:"Projects",
      icon:"home",
      link:"/projects",
      color:"red"
    }
  ]
  ngOnInit(): void {
    this.routeWatcher()
  }
  routeWatcher(){
    this.routes.events.subscribe(event =>{
      if(event instanceof NavigationEnd){
        console.log(event.url)
        this.location = event.url
      }
    })
  }
}
