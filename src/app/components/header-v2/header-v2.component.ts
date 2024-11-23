import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-v2',
  templateUrl: './header-v2.component.html',
  styleUrls: ['./header-v2.component.scss'],
})
export class HeaderV2Component {

  constructor(private router: Router) {}

  isLoggedIn(): boolean {
    return localStorage.getItem('persona') !== null;
  }

  logout(): void {
    localStorage.removeItem('persona');
    this.router.navigate(['/home']);
  }

  redirectToHome(): void {
    this.router.navigate(['/home']);
  }

  redirectToLogin(): void {
    this.router.navigate(['/login']);
  }

  redirectToRegister(): void {
    this.router.navigate(['/register']);
  }
}
