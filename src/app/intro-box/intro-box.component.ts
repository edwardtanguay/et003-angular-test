import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro-box',
  templateUrl: './intro-box.component.html',
  styleUrls: ['./intro-box.component.scss']
})
export class IntroBoxComponent implements OnInit {

  introName = "Our Name";

  constructor() { }

  ngOnInit(): void {
  }

}
