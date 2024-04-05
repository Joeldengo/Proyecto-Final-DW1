import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UsuariosComponent } from '../usuarios/usuarios.component';
import { ConsecutivosComponent } from '../consecutivos/consecutivos.component';
import { PaisesComponent } from '../paises/paises.component';
import { CajasComponent } from '../cajas/cajas.component';
import { RolesComponent } from '../roles/roles.component';
import { UnidadesmedidaComponent } from '../unidadesmedida/unidadesmedida.component';

@Component({
  selector: 'app-seguridad',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, UsuariosComponent, ConsecutivosComponent, PaisesComponent, CajasComponent, RolesComponent, UnidadesmedidaComponent],
  templateUrl: './seguridad.component.html',
  styleUrl: './seguridad.component.css'
})
export class SeguridadComponent {

}
