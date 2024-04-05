import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BuffetComponent } from '../buffet/buffet.component';
import { BebidasComponent } from '../bebidas/bebidas.component';
import { EspecialidadesComponent } from '../especialidades/especialidades.component';

@Component({
  selector: 'app-especial',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterOutlet, BuffetComponent, BebidasComponent, EspecialidadesComponent],
  templateUrl: './especial.component.html',
  styleUrl: './especial.component.css'
})
export class EspecialComponent {

  aceptar() {
    console.log("Siguiente...");
  }

  volver() {
    console.log("Volviendo...");
  }

}
