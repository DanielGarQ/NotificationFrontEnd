import { Injectable } from '@angular/core';
import { Persona } from 'src/app/model/persona.model'; // Asegúrate de que la interfaz Persona esté correctamente definida
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectedDestinatariosService {
  private destinatariosSeleccionados = new BehaviorSubject<Persona[]>([]);

  destinatarios$ = this.destinatariosSeleccionados.asObservable();

  setDestinatarios(destinatarios: Persona[]) {
    this.destinatariosSeleccionados.next(destinatarios);
  }
}
