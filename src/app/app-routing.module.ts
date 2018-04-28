import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './componentes/home-page/home-page.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { PrivateComponent } from './componentes/private/private.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';


const routes: Routes = [
{path:'',component: HomePageComponent},
{path:'login',component: LoginComponent},
{path:'register',component:RegisterComponent},
{path:'private',component:PrivateComponent},
{path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
