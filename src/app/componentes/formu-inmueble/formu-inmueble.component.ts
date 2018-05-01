import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formu-inmueble',
  templateUrl: './formu-inmueble.component.html',
  styleUrls: ['./formu-inmueble.component.scss']
})
export class FormuInmuebleComponent implements OnInit {

   @ViewChild('formpro') formpro: NgForm;
  
  proveedor: any;

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
    this.proveedor = {
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

    this.proveedor.nombre = this.formpro.value.nombre;
    this.proveedor.ape = this.formpro.value.ape;
    this.proveedor.direccion = this.formpro.value.direccion;
    this.proveedor.cp = this.formpro.value.cp;
    this.proveedor.localidad = this.formpro.value.localidad;
    this.proveedor.provincia = this.formpro.value.provincia;
    this.proveedor.telefono = this.formpro.value.telefono;
    this.proveedor.titulo = this.formpro.value.titulo;
    this.proveedor.des = this.formpro.value.des;
    this.proveedor.car = this.formpro.value.car;
    this.proveedor.foto = this.formpro.value.foto;

    this.formpro.reset();  
    console.log(this.proveedor.foto);
  }

}