import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-administracion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './administracion.component.html',
  styleUrl: './administracion.component.css'
})
export class AdministracionComponent {
  especialesChecked: boolean = false;
  empleadosChecked: boolean = false;
  mesasChecked: boolean = false;
  puestoChecked: boolean = false;

  aceptar() {
    // Aquí puedes realizar alguna acción cuando se presione el botón "Aceptar"
    console.log("Opciones seleccionadas:");
    if (this.especialesChecked) {
      console.log("Especiales");
    }
    if (this.empleadosChecked) {
      console.log("Empleados");
    }
    if (this.mesasChecked) {
      console.log("Mesas");
    }
    if (this.puestoChecked) {
      console.log("Puesto");
    }
  }

  volver() {
    // Aquí puedes realizar alguna acción cuando se presione el botón "Volver"
    console.log("Volviendo...");
  }

}
