import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }
  projects : any = [
    {
      name:"test",
      url:"google.com"
    },
    {
      name:"test",
      url:"google.com"
    },
    {
      name:"test",
      url:"google.com"
    },
    {
      name:"test",
      url:"google.com"
    },
    {
      name:"test",
      url:"google.com"
    },
    {
      name:"test",
      url:"google.com"
    },{
      name:"test",
      url:"google.com"
    },
  ]
  
  ngOnInit(): void {
  }

}
