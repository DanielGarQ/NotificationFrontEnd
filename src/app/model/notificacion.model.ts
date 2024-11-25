import { Persona } from "./persona.model";

export interface Notificacion {
  identificador?: string;
  autor: Persona | null;
  titulo: string;
  contenido: string;
  fechaCreacion: string;
  estado: string;
  fechaProgramada: string;
  tipoEntrega: string;
  destinatario: Persona[];
}
