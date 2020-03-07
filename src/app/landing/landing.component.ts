import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-land',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  hero: String  = "The landing page"
  constructor() { }

  ngOnInit(): void {
  }

}
