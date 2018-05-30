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
  inmAmpli: Object;
  amp : Boolean = false;
  inter : Boolean = true;

  constructor(){ 
  	
  }

  ngOnInit() {

  	this.pasaPagina(this.p);//Cuando carga el componente muestra ya la primera pagina de resultados

  }

  ampliarInf(i){
  	scroll(0,0);
  	this.inmAmpli=this.resul2[i];
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

  	scroll(0,0);//Vuelve a subir el scroll para ver la página desde el principio al pasar

  }


}
