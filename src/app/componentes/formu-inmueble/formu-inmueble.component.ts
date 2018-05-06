import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { InmuebleServService }from '../../servicios/inmueble-serv.service';
import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import {AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-formu-inmueble',
  templateUrl: './formu-inmueble.component.html',
  styleUrls: ['./formu-inmueble.component.scss']
})
export class FormuInmuebleComponent implements OnInit {

   @ViewChild('forminm') forminm: NgForm;

  
  inmueble: any;

  total: number = 0;

  uploadPercent: Observable<number>;

  downloadURL: Observable<string>;

  url:any;

  usuario:any;

  provincias: string[] = [ 'Álava','Albacete','Alicante','Almería','Asturias','Ávila','Badajoz',
     'Barcelona','Burgos', 'Cáceres', 'Cádiz','Cantabria','Castellón','Ciudad Real','Córdoba',
     'La Coruña','Cuenca','Gerona','Granada','Guadalajara', 'Guipúzcoa','Huelva','Huesca',
     'IslasBaleares','Jaén','León','Lérida','Lugo','Madrid', 'Málaga','Murcia','Navarra','Orense',
     'Palencia','Las Palmas','Pontevedra','La Rioja','Salamanca','Segovia','Sevilla','Soria',
     'Tarragona','Santa Cruz de Tenerife','Teruel','Toledo','Valencia','Valladolid','Vizcaya',
     'Zamora','Zaragoza' ]

   caracteristicas:string[] = ["Garaje","Piscina","Jardín","Ascensor","Urbanización","Aire Acondicionado","Parquet","Calefacción"]

  constructor(private flashMensaje:FlashMessagesService,private inmuebleServ:InmuebleServService,private router:Router,private storage: AngularFireStorage,public authService:AuthService) {
    this.inmueble = {
      nombre: '',
      ape: '',
      direccion: '',
      cp: '',
      localidad: '',
      provincia: '',
      telefono: null,
      titulo: '',
      des: '',
      car:[],
      foto:'',
      user:'',
    }

  }

  ngOnInit() {
    this.authService.getAuth().subscribe( auth => this.usuario=auth.email );    
  }

  enviarForm() {

    this.inmueble.nombre = this.forminm.value.nombre;
    this.inmueble.ape = this.forminm.value.ape;
    this.inmueble.direccion = this.forminm.value.direccion;
    this.inmueble.cp = this.forminm.value.cp;
    this.inmueble.localidad = this.forminm.value.localidad;
    this.inmueble.provincia = this.forminm.value.provincia;
    this.inmueble.telefono = this.forminm.value.telefono;
    this.inmueble.titulo = this.forminm.value.titulo;
    this.inmueble.des = this.forminm.value.des;
    this.inmueble.car = this.forminm.value.car;
    this.inmueble.user = this.usuario;
    this.inmueble.foto = this.url;
   

    this.inmuebleServ.postInmueble(this.inmueble).subscribe(newinm=>{
      this.flashMensaje.show('Inmueble guardado',{cssClass:'alert-success',timeout:4000});
      this.router.navigate(['/private']);
    });

    this.forminm.reset();   
    
  }

  uploadFile(event) {
    const file = event.target.files[0];
    const filePath = 'img/inmuebles/'+this.forminm.value.foto;
    const task = this.storage.upload(filePath, file);
    this.downloadURL = task.downloadURL();
    this.downloadURL.subscribe(desc=>this.url = desc.valueOf());
  }

}