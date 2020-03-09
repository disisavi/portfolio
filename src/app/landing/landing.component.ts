import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-land',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})

export class LandingComponent implements OnInit {
  titleMessage:String = "The Language Agnostic Developer"
  constructor() { }

  ngOnInit(): void {
  }

}
