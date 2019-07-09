import { Component, OnInit } from '@angular/core';
import {Book, BookApi} from "../service";
import {Router} from "@angular/router";
import 'rxjs/Rx';

@Component({
  selector: 'bs-book-form',
  templateUrl: './book-form.component.html',
  styles: []
})
export class BookFormComponent implements OnInit {

   book: Book = new Book();

  constructor(private router: Router, private bookApi: BookApi) { }

  ngOnInit() {
  }

  create(){

    this.bookApi.createBook(this.book)
      .finally(() => this.router.navigate(['/book-list']))
      .subscribe();
  }

}

