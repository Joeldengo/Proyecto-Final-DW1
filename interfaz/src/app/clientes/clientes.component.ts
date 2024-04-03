import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Cliente {
  codigo: number;
  nombreCompleto: string;
  montoPagado: number;
  detalle: string;
  fecha: string;
  reservacion: boolean;
  barra: boolean;
  restaurante: string;
}
@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {
  codigoCliente: number = 0;
  nombreCliente: string = '';
  nombreRestaurante: string = '';
  fechaInicio: string = '';
  fechaFin: string = '';
  reservacion: string = 'si';
  barra: string = 'si';
  clientes: Cliente[] = [];

  buscarClientes() {
    this.clientes = [
      { codigo: 1, nombreCompleto: 'Juan Perez', montoPagado: 50, detalle: 'Comida y bebidas', fecha: '2024-04-01', reservacion: true, barra: false, restaurante: 'Restaurante A' },
      { codigo: 2, nombreCompleto: 'María Rodriguez', montoPagado: 40, detalle: 'Cena completa', fecha: '2024-04-02', reservacion: false, barra: true, restaurante: 'Restaurante B' },

    ];
  }

}
