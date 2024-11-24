import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss'],
})
export class InboxComponent {

  constructor(private router: Router) {}

  navigateToSendNotification(): void {
    if (localStorage.getItem('persona')) {
      this.router.navigate(['/send-notification']);
    } else {
      alert('Debe iniciar sesión o registrarse primero.');
      this.router.navigate(['/login']);
    }
  }

}
