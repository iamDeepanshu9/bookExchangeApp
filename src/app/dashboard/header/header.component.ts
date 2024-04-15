import { Component, Input, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { AuthService } from "../../services/auth.service";
import { Route, Router } from "@angular/router";
import { MyBooksComponent } from "../my-books/my-books.component";
import { ApiHandleService } from "src/app/services/api-handle.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  @Input() public userName = "helo";
  constructor(
    private dialog: MatDialog,
    private authService: AuthService,
    private route: Router,
    private apiService: ApiHandleService
  ) {}

  ngOnInit(): void {}

  navigateToMyBooks() {
    const dialogRef = this.dialog.open(MyBooksComponent, {
      width: "50%",
    });


    debugger;
    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed", result);
      if(!result){
        return
      }
      this.apiService
        .uploadBook$(result)
        .pipe()
        .subscribe({
          next: (v) =>alert('SuccessFully Uploaded'),
          error: (e) => console.error(e),
        });
    });

      
  }

  logout() {
    this.route.navigate(["auth"], {
      replaceUrl: true,
    });
    this.authService.logout();
  }
}
