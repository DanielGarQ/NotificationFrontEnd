import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SelectedDestinatariosService } from 'src/app/service/destinatarios-seleccionados.service';
import { Persona } from 'src/app/model/persona.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  personas: Persona[] = [];
  selectedPersonas: Persona[] = []; // Lista para almacenar los seleccionados

  constructor(
    private http: HttpClient,
    private selectedDestinatariosService: SelectedDestinatariosService // Inyectar el servicio
  ) {}

  ngOnInit(): void {
    const personaString = localStorage.getItem('persona');
    if (personaString) {
      const persona: Persona = JSON.parse(personaString);
      const headers = new HttpHeaders().set('Authorization', `Bearer ${persona.token}`);
      this.http.get<Persona[]>('http://localhost:8080/v1/persona/all', { headers }).subscribe(
        (data) => {
          this.personas = data;
        },
        (error) => {
          console.error('Error al cargar personas:', error);
        }
      );
    } else {
      console.warn('Token no encontrado en localStorage. No se puede cargar personas.');
    }
  }

  onCheckboxChange(persona: Persona, event: any) {
    if (event.target.checked) {
      this.selectedPersonas.push(persona); // Agrega la persona seleccionada
    } else {
      this.selectedPersonas = this.selectedPersonas.filter(p => p.identificador !== persona.identificador); // Elimina la persona deseleccionada
    }

    // Actualizar el servicio con la lista de seleccionados
    this.selectedDestinatariosService.setDestinatarios(this.selectedPersonas);
  }
}
