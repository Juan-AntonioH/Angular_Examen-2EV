import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Tarea } from '../Modelos/tarea';
import { TareasService } from '../Servicio/tareas.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent {
constructor(private servicio:TareasService, private miRuta:Router){}
realizadas!:number
pendientes!:number
total!:[]
tareas!:Tarea[]
selecion:string="Todas"

tareaID(id:string){
this.miRuta.navigate(['finalizarTarea/'+id])
}

filtro(){
  this.tareas= this.servicio.filtrarTareas(this.selecion)
}

ngOnInit(){
  this.filtro()
  this.realizadas= this.servicio.getTotales().totRealizadas
  this.pendientes= this.servicio.getTotales().totPendientes
}
}
