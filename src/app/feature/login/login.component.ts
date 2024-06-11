import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  userData = {
    correoElectronico: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.userData).subscribe(
      response => {
        this.authService.setToken(response.token);
        this.router.navigate(['/home']); // Redirige al componente de inicio después del inicio de sesión
      },
      error => {
        console.error('Error en el inicio de sesión:', error);
        alert('Credenciales incorrectas. Por favor, inténtelo de nuevo.');
      }
    );
  }
}
