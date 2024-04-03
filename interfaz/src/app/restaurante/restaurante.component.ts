import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-restaurante',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './restaurante.component.html',
  styleUrl: './restaurante.component.css'
})
export class RestauranteComponent {
  codigoRestaurante: string = '';
  nombre: string = '';
  direccion: string = '';
  cantidadClientes: number = 0;
  telefono: string = '';

  limpiar() {
    this.codigoRestaurante = '';
    this.nombre = '';
    this.direccion = '';
    this.cantidadClientes = 0;
    this.telefono = '';
  }

  buscar() {
    // Lógica para buscar el restaurante
  }

  volver() {
    // Lógica para volver a la página anterior
  }

}
