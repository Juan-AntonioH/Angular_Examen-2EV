import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarea } from '../Modelos/tarea';
import { TareasService } from '../Servicio/tareas.service';

@Component({
  selector: 'app-finalizar-tarea',
  templateUrl: './finalizar-tarea.component.html',
  styleUrls: ['./finalizar-tarea.component.css']
})
export class FinalizarTareaComponent {
  constructor(private servicio: TareasService, private rutaActiva: ActivatedRoute, private miRuta: Router) { }

  tarea!: Tarea

  finalizar(id: string) {
    this.servicio.endTarea(id)
    this.miRuta.navigate(['/tareas'])
  }
  ngOnInit() {
    this.tarea = this.servicio.getTarea(this.rutaActiva.snapshot.params["id"])
  }
}
