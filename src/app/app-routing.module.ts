import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinalizarTareaComponent } from './finalizar-tarea/finalizar-tarea.component';
import { GuardaGuard } from './Guardas/guarda.guard';
import { InicioComponent } from './inicio/inicio.component';
import { PanelTareasComponent } from './panel-tareas/panel-tareas.component';
import { TareasComponent } from './tareas/tareas.component';

const routes: Routes = [
  { path: "", component: InicioComponent },
  { path: "tareas", component: TareasComponent },
  { path: "panelTareas",canActivate:[GuardaGuard], component: PanelTareasComponent },
  { path: "finalizarTarea/:id", component: FinalizarTareaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
