import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AuthService} from "../../services/auth.service";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() public userName = 'helo';
  constructor(
    private dialog: MatDialog,
    private authService: AuthService,
    private route: Router
  ) { }

  ngOnInit(): void {
  }
  navigateToMyBooks(){
    this.route.navigate(["dashboard", "my-books"],{
      replaceUrl: true
    })
  }

  logout() {
    this.route.navigate(["auth"],{
      replaceUrl: true
    })
    this.authService.logout();
  }
}