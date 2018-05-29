import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomePageComponent } from './componentes/home-page/home-page.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { RegisterComponent } from './componentes/register/register.component';
import { LoginComponent } from './componentes/login/login.component';
import { PrivadoComponent } from './componentes/privado/privado.component';
import { PrivateComponent } from './componentes/private/private.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';
import { FormuInmuebleComponent } from './componentes/formu-inmueble/formu-inmueble.component';
import { FormBusquedaComponent } from './componentes/form-busqueda/form-busqueda.component';
import { ResultadoBusquedaComponent } from './componentes/form-busqueda/resultado-busqueda/resultado-busqueda.component';



import { FlashMessagesModule } from 'angular2-flash-messages';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireStorageModule } from 'angularfire2/storage';

import { environment } from '../environments/environment';

import{ AuthService } from './servicios/auth.service';
import { InmuebleServService } from './servicios/inmueble-serv.service';
import { AuthGuard } from './guards/auth.guard';






@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    PrivadoComponent,
    PrivateComponent,
    NotFoundComponent,
    FormuInmuebleComponent,
    FormBusquedaComponent,
    ResultadoBusquedaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FlashMessagesModule,
    HttpModule,
    AngularFireStorageModule
  ],
  providers: [AuthService,
  AuthGuard,
  FlashMessagesService,
  InmuebleServService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
