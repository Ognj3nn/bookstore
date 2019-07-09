import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import 'rxjs/Rx';
import {Book, BookApi} from "../service";



@Component({
  selector: 'bs-book-detail',
  templateUrl: './book-detail.component.html',
  styles: []
})
export class BookDetailComponent implements OnInit {

   book: Book;

  constructor( private router: Router, private bookApi: BookApi, private route: ActivatedRoute ) { }



  ngOnInit()  {
    this.route.params
      .map(params => params['bookId'])
      .switchMap(id => this.bookApi.getBook(id))
      .subscribe(book => this.book = book);

  }

  delete(){
    this.bookApi.deleteBook(this.book.id)
    .finally(() => this.router.navigate(['/book-list']))
    .subscribe();
  }
}
