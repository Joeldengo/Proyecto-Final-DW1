import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { AdministracionComponent } from './administracion/administracion.component';
import { SeguridadComponent } from './seguridad/seguridad.component';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { ReportesComponent } from './reportes/reportes.component';
import { IniciosesionComponent } from './iniciosesion/iniciosesion.component';
import { AuthguardService } from './authguard/authguard.service';

export const routes: Routes = [
    {
        path:'',
        component:IniciosesionComponent,
        canActivate:[AuthguardService]
    },
    {
        path:'Administración',
        component:AdministracionComponent
    },
    {
        path:'Reportes',
        component:ReportesComponent
    },
    
    {
        path:'Clientes',
        component:ClientesComponent
    },
    {
        path:'Proveedores',
        component:ProveedoresComponent
    },
    {
        path:'Restaurante',
        component:RestauranteComponent
    },
    {
        path:'Login',
        component:IniciosesionComponent
    },
    {
        path:'Seguridad',
        component:SeguridadComponent
    }
];
