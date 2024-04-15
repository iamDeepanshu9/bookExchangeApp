import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.css']
})
export class MyBooksComponent implements OnInit {
  bookForm: FormGroup;

  constructor(private fb: FormBuilder, private matDialog: MatDialogRef<MyBooksComponent>) {
    this.bookForm = this.fb.group({
      title: ['', [Validators.required]],
      author: ['', [Validators.required]],
      file: [null, [Validators.required]]
    });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.bookForm.patchValue({ file: file });
    }
  }

  uploadBook() {
    if (this.bookForm.valid) {
      console.log('Form Data:', this.bookForm.value);
      this.matDialog.close(this.bookForm.value);
    }
  }



  ngOnInit(): void {
  }

}
