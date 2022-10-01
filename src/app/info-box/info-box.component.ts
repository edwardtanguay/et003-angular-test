import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.scss']
})
export class InfoBoxComponent implements OnInit {

  randomNumber: number;

  constructor() {
    this.randomNumber = Math.floor(Math.random() * 100) + 1;
  }

  ngOnInit(): void {
  }

}
