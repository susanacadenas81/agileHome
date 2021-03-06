import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './componentes/home-page/home-page.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { PrivateComponent } from './componentes/private/private.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';
import { FormuInmuebleComponent } from './componentes/formu-inmueble/formu-inmueble.component';
import { FormBusquedaComponent } from './componentes/form-busqueda/form-busqueda.component';
import { ResultadoBusquedaComponent } from './componentes/form-busqueda/resultado-busqueda/resultado-busqueda.component';

import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
{path:'',component: HomePageComponent},
{path:'login',component: LoginComponent},
{path:'register',component:RegisterComponent},
{path:'busqueda',component:FormBusquedaComponent},
{path:'private',component:PrivateComponent, canActivate : [AuthGuard]},
{path:'formInm',component:FormuInmuebleComponent, canActivate : [AuthGuard]},
{path: 'resultado', component:ResultadoBusquedaComponent},
{path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
