import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router: Router) {}

  isLoggedIn(): boolean {
    return localStorage.getItem('persona') !== null;
  }

  navigateToSendNotification(): void {
    if (localStorage.getItem('persona')) {
      this.router.navigate(['/send-notification']);
    } else {
      alert('Debe iniciar sesión o registrarse primero.');
      this.router.navigate(['/login']);
    }
  }

  navigateToInbox(): void {
    if (localStorage.getItem('persona')) {
      this.router.navigate(['/inbox']);
    } else {
      alert('Debe iniciar sesión o registrarse primero.');
      this.router.navigate(['/login']);
    }
  }
}
