import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exchange-screen',
  templateUrl: './exchange-screen.component.html',
  styleUrls: ['./exchange-screen.component.css']
})
export class ExchangeScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  userBooks = [
    { title: 'Book One', author: 'Author One', description: 'Description one' },
    { title: 'Book Two', author: 'Author Two', description: 'Description two' }
  ];

  otherBooks = [
    { title: 'Book Three', author: 'Author Three', description: 'Description three' },
    { title: 'Book Four', author: 'Author Four', description: 'Description four' }
  ];

  selectedUserBook: any;
  selectedOtherBook: any;

  onBookSelect() {
    // Logic to update book details or handle changes
  }

  canExchange() {
    return this.selectedUserBook && this.selectedOtherBook;
  }

  exchangeBooks() {
    // Logic to perform exchange
    console.log('Exchange initiated between:', this.selectedUserBook, 'and', this.selectedOtherBook);
  }

}
