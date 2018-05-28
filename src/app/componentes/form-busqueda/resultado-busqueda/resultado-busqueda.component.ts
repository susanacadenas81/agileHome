import { Component, OnInit, Input,ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-resultado-busqueda',
  templateUrl: './resultado-busqueda.component.html',
  styleUrls: ['./resultado-busqueda.component.scss']
})
export class ResultadoBusquedaComponent implements OnInit {

  @Input()resul: Array<any>;
  pag : Number = 3;
  min : Number = 0;

  constructor(private ref: ChangeDetectorRef){ 
  }

  ngOnInit() {

  }
  paginacion(p,min){
  	this.min = min;
  	this.pag = p;
  	this.ref.reattach();
  }


}
