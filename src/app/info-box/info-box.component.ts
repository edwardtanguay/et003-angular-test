import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.scss']
})
export class InfoBoxComponent implements OnInit {

  randomNumber: number = Math.floor(Math.random() * 100) + 1;
  message: string;
  mainColor = 'lightgreen';

  getRandomColor(): string {
    return Math.floor(Math.random() * 2) + 1 === 1 ? 'red' : 'black';
  }

  constructor() {
    this.message = 'this is the message';
  }

  ngOnInit(): void {
  }

}
