import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-display',
  templateUrl: './project-display.component.html',
  styleUrls: ['./project-display.component.css']
})
export class ProjectDisplayComponent implements OnInit {
  @Input() project: any
  constructor() { }

  ngOnInit(): void {
  }

}
