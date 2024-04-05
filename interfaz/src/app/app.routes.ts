import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { AdministracionComponent } from './administracion/administracion.component';
import { SeguridadComponent } from './seguridad/seguridad.component';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { ReportesComponent } from './reportes/reportes.component';
import { IniciosesionComponent } from './iniciosesion/iniciosesion.component';
import { EspecialidadesComponent } from './especialidades/especialidades.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { PuestoComponent } from './puesto/puesto.component';
import { MesasComponent } from './mesas/mesas.component';
import { EspecialComponent } from './especial/especial.component';
import { BuffetComponent } from './buffet/buffet.component';
import { BebidasComponent } from './bebidas/bebidas.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ConsecutivosComponent } from './consecutivos/consecutivos.component';
import { PaisesComponent } from './paises/paises.component';
import { CajasComponent } from './cajas/cajas.component';
import { RolesComponent } from './roles/roles.component';
import { UnidadesmedidaComponent } from './unidadesmedida/unidadesmedida.component';

export const routes: Routes = [
    {
        path:'Especialidades',
        component:EspecialidadesComponent
    },
    {
        path:'Buffet',
        component:BuffetComponent
    },
    {
        path:'Bebidas',
        component:BebidasComponent
    },
    {
        path:'Especiales',
        component:EspecialComponent
    },
    {
        path:'Empleados',
        component:EmpleadosComponent
    },
    {
        path:'Puesto',
        component:PuestoComponent
    },
    {
        path:'Mesas',
        component:MesasComponent
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
        path:'Usuarios',
        component:UsuariosComponent
    },
    {
        path:'Consecutivos',
        component:ConsecutivosComponent
    },
    {
        path:'Paises',
        component:PaisesComponent
    },
    {
        path:'Cajas',
        component:CajasComponent
    },
    {
        path:'Roles',
        component:RolesComponent
    },
    {
        path:'UnidadMedidas',
        component:UnidadesmedidaComponent
    },
    {
        path:'Seguridad',
        component:SeguridadComponent
    }
];
