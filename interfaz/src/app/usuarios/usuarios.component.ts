import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SeguridadComponent } from '../seguridad/seguridad.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, FormsModule, SeguridadComponent, RouterLink, RouterOutlet],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {

  codigo: string = '';
  nombre: string = '';
  primerApellido: string = '';
  segundoApellido: string = '';
  telefono: string = '';
  telefono2: string = '';
  login: string = '';
  contraseña: string = '';

  limpiar() {
    this.codigo = '';
    this.nombre = '';
    this.primerApellido = '';
    this.segundoApellido = '';
    this.telefono = '';
    this.telefono2 = '';
  }

  buscar() {
    // Lógica para buscar el restaurante
  }

  volver() {
    // Lógica para volver a la página anterior
  }

}
