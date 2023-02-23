import { Component } from '@angular/core';
import { Tarea } from '../Modelos/tarea';
import { TareasService } from '../Servicio/tareas.service';

@Component({
  selector: 'app-panel-tareas',
  templateUrl: './panel-tareas.component.html',
  styleUrls: ['./panel-tareas.component.css']
})
export class PanelTareasComponent {
constructor(private servicio:TareasService){}
tareas!:Tarea[]

ngOnInit(){
  this.tareas=this.servicio.getTareas()
}
}
