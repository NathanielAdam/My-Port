import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  constructor() { }
  navItems= [
    {
      title:"About",
      icon:"home",
      link:"about",
      color:"red"
    },
    {
      title:"Soft Skills",
      icon:"softskills",
      link:"softskills",
      color:"red"
    },
    {
      title:"Tech Skills",
      icon:"home",
      link:"techskills",
      color:"red"
    },
    {
      title:"Projects",
      icon:"home",
      link:"projects",
      color:"red"
    }
  ]
  ngOnInit(): void {
  }
  navigate(e: any){
    console.log(e)
  }
}
