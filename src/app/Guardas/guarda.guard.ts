import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TareasService } from '../Servicio/tareas.service';

@Injectable({
  providedIn: 'root'
})
export class GuardaGuard implements CanActivate {
  constructor(private servicio: TareasService, private miRuta: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let password = prompt("Indica la contraseña")
    if (password == this.servicio.getPassword()) {
      return true
    }
    else {
      this.miRuta.navigate([""])
      return false
    }

  }

}
