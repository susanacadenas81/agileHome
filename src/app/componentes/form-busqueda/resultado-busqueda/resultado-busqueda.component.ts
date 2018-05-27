import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resultado-busqueda',
  templateUrl: './resultado-busqueda.component.html',
  styleUrls: ['./resultado-busqueda.component.scss']
})
export class ResultadoBusquedaComponent implements OnInit {

  @Input()resul: Array<any>;

  constructor() { 
  }

  ngOnInit() {

  }


}
