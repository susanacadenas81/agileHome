import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InmuebleServService }from '../../servicios/inmueble-serv.service';
import { Observable } from 'rxjs';
import {AuthService } from '../../servicios/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent implements OnInit {

  private inmueblesPublicados:Object;
  public inms:Array<any>;
  private inmueblesPub : Boolean;

  //poner la llave
  //problema de asincronismo con la foto al subir el inmueble

  constructor(private router:Router,private flashMensaje:FlashMessagesService,private inmuebleServ:InmuebleServService,private authService:AuthService) { 

  		this.inms=[];

  }

  ngOnInit() {
  	let user = "";
  	this.authService.getAuth().subscribe( auth => user = auth.email);
  	let inm = this.inmuebleServ.getInmuebles().subscribe(list => {let claves = Object.keys(list);
  	for(let inmueble of claves){
  		
  		if(list[inmueble].user == user) {

      list[inmueble].id = inmueble;
  		this.inms.push(list[inmueble]);
  		this.inmueblesPub = true;

  		}

  	}
  	});
  }

  borrar(id){
  	this.inmuebleServ.delInm(id).subscribe(x=>{
    this.flashMensaje.show('Inmueble borrado',
      {cssClass:'alert-success',timeout:4000});
    document.location.href = document.location.href;
    });
    
  }

  express(inm,id){
    inm.llave=!inm.llave;
    this.inmuebleServ.putInmueble(inm,id);
  }


}
