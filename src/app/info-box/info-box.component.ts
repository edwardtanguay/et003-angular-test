import { Component, OnInit, Input } from '@angular/core';
import  books from '../../data/books.json';

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.scss']
})
export class InfoBoxComponent implements OnInit {

  @Input() theColor = '';

  randomNumber: number = Math.floor(Math.random() * 100) + 1;
  message: string;
  mainColor = 'lightgreen';

  getRandomColor(): string {
    return Math.floor(Math.random() * 2) + 1 === 1 ? 'red' : 'black';
  }

  constructor() {
    this.message = `there are ${books.length} books`;
  }

  ngOnInit(): void {
  }

}
