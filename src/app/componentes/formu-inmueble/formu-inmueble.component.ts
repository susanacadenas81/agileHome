import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formu-inmueble',
  templateUrl: './formu-inmueble.component.html',
  styleUrls: ['./formu-inmueble.component.scss']
})
export class FormuInmuebleComponent implements OnInit {

   @ViewChild('forminm') forminm: NgForm;
  
  inmueble: any;

  total: number = 0;

  provincias: string[] = [ 'Álava','Albacete','Alicante','Almería','Asturias','Ávila','Badajoz',
     'Barcelona','Burgos', 'Cáceres', 'Cádiz','Cantabria','Castellón','Ciudad Real','Córdoba',
     'La Coruña','Cuenca','Gerona','Granada','Guadalajara', 'Guipúzcoa','Huelva','Huesca',
     'IslasBaleares','Jaén','León','Lérida','Lugo','Madrid', 'Málaga','Murcia','Navarra','Orense',
     'Palencia','Las Palmas','Pontevedra','La Rioja','Salamanca','Segovia','Sevilla','Soria',
     'Tarragona','Santa Cruz de Tenerife','Teruel','Toledo','Valencia','Valladolid','Vizcaya',
     'Zamora','Zaragoza' ]

   caracteristicas:string[] = ["Garaje","Piscina","Jardín","Ascensor","Urbanización","Aire Acondicionado","Parquet","Calefacción"]

  constructor() {
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
      foto:''
    }
  }

  ngOnInit() {
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
    this.inmueble.foto = this.forminm.value.foto;

    this.forminm.reset();  
    console.log(this.inmueble.foto);
  }

}