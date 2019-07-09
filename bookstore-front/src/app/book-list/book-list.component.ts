import { Component, OnInit } from '@angular/core';
import {Book, BookApi} from "../service";
import 'rxjs/Rx';


@Component({
  selector: 'bs-book-list',
  templateUrl: './book-list.component.html',
  styles: []
})
export class BookListComponent implements OnInit {

     nbBooks: number;
     books: Book[];


  constructor(private  bookApi: BookApi) { }

  ngOnInit() {
    this.bookApi.countBooks().subscribe(nbBooks => this.nbBooks = nbBooks);
    this.bookApi.getBooks().subscribe(books => this.books = books);



  }

}
