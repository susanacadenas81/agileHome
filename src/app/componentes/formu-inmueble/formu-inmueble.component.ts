import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { InmuebleServService }from '../../servicios/inmueble-serv.service';
import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-formu-inmueble',
  templateUrl: './formu-inmueble.component.html',
  styleUrls: ['./formu-inmueble.component.scss']
})
export class FormuInmuebleComponent implements OnInit {

   @ViewChild('forminm') forminm: NgForm;
  
  inmueble: any;

  total: number = 0;

  uploadPercent: Observable<number>;

  downloadURL: Observable<string>;

  provincias: string[] = [ 'Álava','Albacete','Alicante','Almería','Asturias','Ávila','Badajoz',
     'Barcelona','Burgos', 'Cáceres', 'Cádiz','Cantabria','Castellón','Ciudad Real','Córdoba',
     'La Coruña','Cuenca','Gerona','Granada','Guadalajara', 'Guipúzcoa','Huelva','Huesca',
     'IslasBaleares','Jaén','León','Lérida','Lugo','Madrid', 'Málaga','Murcia','Navarra','Orense',
     'Palencia','Las Palmas','Pontevedra','La Rioja','Salamanca','Segovia','Sevilla','Soria',
     'Tarragona','Santa Cruz de Tenerife','Teruel','Toledo','Valencia','Valladolid','Vizcaya',
     'Zamora','Zaragoza' ]

   caracteristicas:string[] = ["Garaje","Piscina","Jardín","Ascensor","Urbanización","Aire Acondicionado","Parquet","Calefacción"]

  constructor(private inmuebleServ:InmuebleServService,private storage: AngularFireStorage) {
    this.inmueble = {
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

    this.inmueble.nombre = this.forminm.value.nombre;
    this.inmueble.ape = this.forminm.value.ape;
    this.inmueble.direccion = this.forminm.value.direccion;
    this.inmueble.cp = this.forminm.value.cp;
    this.inmueble.localidad = this.forminm.value.localidad;
    this.inmueble.provincia = this.forminm.value.provincia;
    this.inmueble.telefono = this.forminm.value.telefono;
    this.inmueble.titulo = this.forminm.value.titulo;
    this.inmueble.des = this.forminm.value.des;
    this.inmueble.car = this.forminm.value.car;
    this.inmueble.foto = this.forminm.value.foto;


    this.inmuebleServ.postInmueble(this.inmueble).subscribe(newinm=>alert( 'Inmueble guardado correctamente'));

    this.forminm.reset();  
    
  }
  uploadFile(event) {
    const file = event.target.files[0];
    const filePath = 'img/inmuebles/'+this.forminm.value.foto;
    const task = this.storage.upload(filePath, file);
    
    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    this.downloadURL = task.downloadURL();
  }

}