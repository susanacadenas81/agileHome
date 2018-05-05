import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { InmuebleServService }from '../../servicios/inmueble-serv.service';
import { Observable } from 'rxjs';
import {AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent implements OnInit {

  private inmueblesPublicados:Object;
  public inms:Array<any>;

  constructor(public router:Router,private inmuebleServ:InmuebleServService,public authService:AuthService) { 

  		this.inms=[];

  }

  ngOnInit() {
  	let user = "";
  	this.authService.getAuth().subscribe( auth => user = auth.email);
  	let inm = this.inmuebleServ.getInmuebles().subscribe(list => {let claves = Object.keys(list);
  	for(let inmueble of claves){
  		if(list[inmueble].user == user) {
  		this.inms.push(list[inmueble]);
  		}
  	}
  	});
  	console.log(this.inms);
  	console.log(user);  //----------------
  }


}
