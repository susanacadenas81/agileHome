import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { InmuebleServService } from '../../servicios/inmueble-serv.service'

@Component({
  selector: 'app-form-busqueda',
  templateUrl: './form-busqueda.component.html',
  styleUrls: ['./form-busqueda.component.scss']
})
export class FormBusquedaComponent implements OnInit {

@ViewChild('forminm') forminm: NgForm;
private tipoTransaccion:Array<String> = ["Alquiler", "Venta"];
private busqueda: any;
private provincias: string[] = [ 'Álava','Albacete','Alicante','Almería','Asturias','Ávila','Badajoz',
     'Barcelona','Burgos', 'Cáceres', 'Cádiz','Cantabria','Castellón','Ciudad Real','Córdoba',
     'La Coruña','Cuenca','Gerona','Granada','Guadalajara', 'Guipúzcoa','Huelva','Huesca',
     'IslasBaleares','Jaén','León','Lérida','Lugo','Madrid', 'Málaga','Murcia','Navarra','Orense',
     'Palencia','Las Palmas','Pontevedra','La Rioja','Salamanca','Segovia','Sevilla','Soria',
     'Tarragona','Santa Cruz de Tenerife','Teruel','Toledo','Valencia','Valladolid','Vizcaya',
     'Zamora','Zaragoza' ]

private caracteristicas:string[] = ["Garaje","Piscina","Jardín","Ascensor","Urbanización","Aire Acondicionado","Parquet","Calefacción"]
  constructor(private inmuebleServ : InmuebleServService ) { }

  ngOnInit() {

  	this.busqueda = {

  		tipo : '',
  		precioMax : 0,
  		localidad : '',
  		provincia : '',
  		car : []

  	}

  }

  enviarForm(){

  	this.busqueda.tipo = this.forminm.value.tipo;
  	this.busqueda.precioMax = this.forminm.value.precioMax;
  	this.busqueda.localidad = this.forminm.value.localidad;
  	this.busqueda.provincia = this.forminm.value.provincia;
  	this.busqueda.car = this.forminm.value.car;
  	console.log(this.busqueda);

  	let resul = [];
  	let bus = this.inmuebleServ.getInmuebles();
  	bus.subscribe(res=> {for (let re in res){
  		console.log(res[re].provincia);
  		console.log(this.busqueda.provincia);
  			if(res[re].provincia == this.busqueda.provincia){
  			resul.push(res[re]);
  			}
  		}
  		console.log(resul);
  	})

  	

  }

}
