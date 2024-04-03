import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AdministracionComponent } from './administracion/administracion.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { ReportesComponent } from './reportes/reportes.component';
import { SeguridadComponent } from './seguridad/seguridad.component';
import { IniciosesionComponent } from './iniciosesion/iniciosesion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AdministracionComponent, ClientesComponent, ProveedoresComponent, ReportesComponent, SeguridadComponent,IniciosesionComponent , RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'interfaz';
}
