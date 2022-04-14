import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isLoggedIn: boolean;

  constructor(private router: Router) {
    this.isLoggedIn = false;
  }
  ngOnInit(): void {
    this.loggedIn();
  }
  loggedIn(): void {
    if (localStorage.getItem('login') == 'success') {
      this.isLoggedIn = true;
    }
  }
  async logOut(): Promise<void> {
    window.localStorage.clear();
    this.router.navigate(['/home']);
    await this.delay(500);
    window.location.reload();
  }
  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
