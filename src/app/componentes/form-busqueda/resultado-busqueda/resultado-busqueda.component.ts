import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-resultado-busqueda',
  templateUrl: './resultado-busqueda.component.html',
  styleUrls: ['./resultado-busqueda.component.scss']
})
export class ResultadoBusquedaComponent implements OnInit {
//Mejorar vista de información ampliada

  @Input()resul: Array<any>;
  resul2 : Array<any> = [];
  p: Number = 1;
  pag : Number = 3;
  min : Number = 0;
  inmAmpli: Object;
  amp : Boolean = false;
  inter : Boolean = true;

  constructor(){ 
  	
  }

  ngOnInit() {
  	this.pasaPagina(this.p);
  }
  ampliarInf(i){
  	this.inmAmpli=this.resul[i];
  	this.amp = true;
  }
  volverListado(){
  	this.amp = false;
  }
  pasaPagina(numPag){
  	this.resul2 = [];
  	this.p=numPag;
  	for (let i = (numPag-1)*3;i<=(numPag*3)-1;i++){
  	this.resul2.push(this.resul[i]);
  	}
  	this.inter = !this.inter;
  	scroll(0,0);

  }


}
