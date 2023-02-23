import { Injectable } from '@angular/core';
import { Tarea } from '../Modelos/tarea';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  constructor() { }

  // Password para acceder a Panel de Tareas

  password: string = "123456"

  // Listado de tareas para el servicio. Definir el tipo de datos adecuado de la lista de tareas

  tareas: Tarea[] = [
    {
      id: '1',
      nombre: 'Examen Cliente',
      estado: 'Pendiente'
    },
    {
      id: '2',
      nombre: 'Examen Servidor',
      estado: 'Pendiente'
    },
    {
      id: '3',
      nombre: 'Examen Interfaces',
      estado: 'Realizada'
    },
    {
      id: '4',
      nombre: 'Examen Despliegue',
      estado: 'Pendiente'
    },
    {
      id: '5',
      nombre: 'Examen EEIE',
      estado: 'Pendiente'
    },
    {
      id: '6',
      nombre: 'Ingles',
      estado: 'Realizada'
    }
  ]

  //Definir los metodos del servicio que se piden

  getTareas() {
    return this.tareas
  }

  getTarea(id: string) {
    let pos = this.tareas.findIndex(t => t.id == id)
    return this.tareas[pos]
  }

  endTarea(id: string) {
    let pos = this.tareas.findIndex(t => t.id == id)
    this.tareas[pos].estado = "Realizada"
  }

  getTotales() {
    let realizadas = this.tareas.filter(t => t.estado == "Realizada")
    let pendientes = this.tareas.filter(t => t.estado == "Pendiente")
    return { totRealizadas: realizadas.length, totPendientes: pendientes.length }
  }

  filtrarTareas(estado: string) {
    if (estado == "Todas") {
      return this.tareas
    } else {
      return this.tareas.filter(t => t.estado == estado)
    }
  }

  getPassword() {
    return this.password
  }
}
