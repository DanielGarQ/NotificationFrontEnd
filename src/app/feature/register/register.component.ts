import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service'; // Ajusta la ruta según la estructura de tu proyecto
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  userData = {
    primerNombre: '',
    segundoNombre: '',
    primerApellido: '',
    segundoApellido: '',
    correoElectronico: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    this.authService.register(this.userData).subscribe(
      response => {
        this.authService.setToken(response.token); // Almacena el token en localStorage
        this.router.navigate(['/dashboard']); // Navega a la vista de inicio o dashboard
      },
      error => {
        console.error('Error en el registro:', error);
        // Agrega un mensaje de error descriptivo para el usuario
        alert('Ha ocurrido un error durante el registro. Por favor, inténtelo de nuevo más tarde.');
      }
    );
  }
}
