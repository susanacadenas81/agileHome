import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { InmuebleServService } from '../../servicios/inmueble-serv.service'
//paginación de resultados
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

caracteristicas:string[] = ["Garaje","Piscina","Jardín","Ascensor","Urbanización","Aire Acondicionado","Parquet","Calefacción"]
private vista = true;
private resul =[];


  constructor(private inmuebleServ : InmuebleServService ) { }

  ngOnInit() {
var saludo = "Hola";
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


  	
  	let bus = this.inmuebleServ.getInmuebles();
  	let bool : Boolean = true;
  	let pre : number = this.forminm.value.precio;
  	let ca : string[] = this.forminm.value.car;
    let caract : Boolean = true;

  	bus.subscribe(
  		res=> {
        for (let pos in res){
        if(this.busqueda.tipo == res[pos].tipo){
          if(this.busqueda.precio==0 || res[pos].precio <= this.busqueda.precio){
            if(this.busqueda.localidad == "" || res[pos].localidad == this.busqueda.localidad){
              if(this.busqueda.provincia == "" || res[pos].provincia == this.busqueda.provincia){
                for(let ca of this.busqueda.car){
                  if( !res[pos].car.includes(ca) )
                    { 
                      caract = false;
                    }
                }
                if(caract){
                this.resul.push(res[pos]);
                }
                caract = true;
              }
            }
          }
        }

        }

  		this.forminm.reset();
  		this.vista = false;
  		
  	});
  }

  //Botón volver
  cambioVista(){
  	this.vista = true;
    this.resul = [];
  }

}
