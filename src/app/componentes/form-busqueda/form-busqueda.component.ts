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
  		precio : 0,
  		localidad : '',
  		provincia : '',
  		car : []

  	}

  }

  enviarForm(){

  	this.busqueda.tipo = this.forminm.value.tipo;
  	this.busqueda.precio = this.forminm.value.precio;
  	this.busqueda.localidad = this.forminm.value.localidad;
  	this.busqueda.provincia = this.forminm.value.provincia;
  	this.busqueda.car = this.forminm.value.car;

  	let resul = [];
  	let bus = this.inmuebleServ.getInmuebles();
  	let bool : Boolean = true;
  	let pre : number = this.forminm.value.precio;
  	let ca : string[] = this.forminm.value.car;

  	bus.subscribe(
  		res=> {
  		for (let pos in res){

  			bool = true;
  			this.busqueda.car = ca;

  			for(let car in this.busqueda.car){

  				if(this.busqueda.car[car]!="" && !res[pos].car.includes(this.busqueda.car[car])){

  					bool = false;

  				}
  			}
  			

  			if(bool){

  				ca = this.busqueda.car;
  				this.busqueda.car = "";
  				this.busqueda.precio = pre;
  				

  				if(res[pos].precio <= this.busqueda.precio){

  					pre = this.busqueda.precio;
  					this.busqueda.precio= "";

  					for(let buscar in this.busqueda){

  						if(res[pos][buscar] != this.busqueda[buscar] && this.busqueda[buscar] != ""){

  							bool = false;

  						}

  					}
  			
  				if (bool) {
  					resul.push(res[pos]);
  				}

  				bool = true;

  				}
  			}
  		
  		}

  		console.log(resul);
  		this.forminm.reset();
  		
  	});
  }

}
