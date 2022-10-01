import { Component } from '@angular/core';
import { IBook } from './common/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'et003-angular-test';
  message: string;
  book: IBook;

  constructor() {
    this.book = {
      title: "Sapiens",
      author: "Harari",
      numberOfPages: 234
    }
    this.message = `The current book is "${this.book.title}".`
  }
}