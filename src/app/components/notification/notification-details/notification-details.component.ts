import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Notificacion } from 'src/app/model/notificacion.model';
import { SelectedDestinatariosService } from 'src/app/service/destinatarios-seleccionados.service';
import { NotificacionService } from 'src/app/service/notificacion.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-notification-details',
  templateUrl: './notification-details.component.html',
  styleUrls: ['./notification-details.component.scss']
})
export class NotificationDetailsComponent implements OnInit {

  request: Notificacion = {
    autor: null,
    titulo: "",
    contenido: "",
    fechaCreacion: "",
    estado: "Nuevo",
    fechaProgramada: "",
    tipoEntrega: "Nuevo",
    destinatario: [],
  };

  constructor(
    private personaService: PersonaService,
    private notificacionService: NotificacionService,
    private selectedDestinatariosService: SelectedDestinatariosService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.selectedDestinatariosService.destinatarios$.subscribe((destinatarios) => {
      this.request.destinatario = destinatarios;
    });
  }

  createNotification(event: Event) {
    event.preventDefault();
    this.request.autor = this.personaService.getStoredPersona();
    this.request.fechaCreacion = new Date().toISOString();
    this.request.fechaProgramada = new Date().toISOString();

    if (this.request.destinatario.length == 0) {
      alert("Debe seleccionar destinatario(s)");
      return;
    }

    this.notificacionService.createNotificacion(this.request, this.request.autor?.token!).subscribe(
      (response: any) => {
        console.log('Notificación creada:', response);
        this.router.navigate(['/home']);
        alert("Notifficación creada");
      },
      (error: any) => {
        console.error('Error al crear la notificación:', error);
        alert('Error al crear la notificación: ' + error.message);
      }
    );
  }
}
