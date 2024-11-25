import { Injectable } from '@angular/core';
import { Persona } from '../model/persona.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Notificacion } from '../model/notificacion.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificacionService {
  private readonly notificacionUrl = 'http://localhost:8080/v1/notificacion';
  private readonly personaKey = 'persona';

  private persona: Persona | null = null;

  constructor(private http: HttpClient) {
    this.loadStoredData();
  }

  private loadStoredData(): void {
    const storedPersona = localStorage.getItem(this.personaKey);
    if (storedPersona) {
      this.persona = JSON.parse(storedPersona);
    }
  }

  createNotificacion(
    notificacion: Notificacion,
    token: string
  ): Observable<Notificacion> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    });

    console.log(notificacion);
    console.log(headers);

    return this.http.post<Notificacion>(this.notificacionUrl, notificacion, { headers });
  }
}
