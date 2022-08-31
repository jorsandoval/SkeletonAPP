import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private usuario: string = '';
  constructor(private router: Router) {
  }
  ngOnInit(): void {

  }

  ngOnclick() {
    let navigationExtras: NavigationExtras = {
      state: {user: this.usuario}
    };
    this.router.navigate(['/home'], navigationExtras);
  }
}
