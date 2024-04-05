import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { EmpleadosComponent } from '../empleados/empleados.component';
import { EspecialidadesComponent } from '../especialidades/especialidades.component';
import { PuestoComponent } from '../puesto/puesto.component';

@Component({
  selector: 'app-administracion',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, EmpleadosComponent, EspecialidadesComponent, PuestoComponent, RouterOutlet],
  templateUrl: './administracion.component.html',
  styleUrl: './administracion.component.css'
})
export class AdministracionComponent {

  aceptar() {
    
  }

  volver() {
    console.log("Volviendo...");
  }

}
