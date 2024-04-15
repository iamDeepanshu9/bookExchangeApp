import { Component, OnInit } from '@angular/core';
import { ApiHandleService } from 'src/app/services/api-handle.service';

@Component({
  selector: 'app-exchange-screen',
  templateUrl: './exchange-screen.component.html',
  styleUrls: ['./exchange-screen.component.css']
})
export class ExchangeScreenComponent implements OnInit {
  userId = localStorage.getItem('userID');

  constructor(
    private apiService: ApiHandleService
  ) {
   
   }

  ngOnInit(): void {
    this.apiService.getOtherBooks$(this.userId).subscribe({
      next(value) {
          this.otherBooks = value;
      },
    }) 
    
    this.apiService.getUserBooks$(this.userId).subscribe({
      next(value) {
          this.userBooks = value;
      },
    })
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
   
    const body = {userId: this.userId, otherBookId: this.selectedOtherBook.id, userBookId: this.selectedUserBook.id};

    this.apiService.exchange(body).subscribe({
      next: (v) => {
        alert('SuccessFully Exchnaged');
      }
    })
  }

}
