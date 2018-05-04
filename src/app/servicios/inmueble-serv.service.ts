import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class InmuebleServService {

clisURL ='https://agilehome-fe94b.firebaseio.com/inmuebles.json'
cliURL = 'https://agilehome-fe94b.firebaseio.com/inmuebles'

  constructor(private http:Http) { }

  postInmueble(inmueble){
  	const newInmueble = JSON.stringify(inmueble);
  	const headers = new Headers({
      'Content-Type': 'application/json'
 	 });

  	return this.http.post(this.clisURL,newInmueble,{headers})
  	.map(res => res.json())
  }

   getInmuebles() {
	return this.http.get(this.clisURL)
        .map(
          res => res.json() 
        );
  }

   putInmueble(inmueble: any, id$: string){
    const newinm = JSON.stringify(inmueble);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    const url = `${this.cliURL}/${id$}.json`;

    return this.http.put( url, newinm, {headers})
        .map ( res => {
          console.log(res.json());
          return res.json();
        })

  }

  delCli ( id$: string) {
    const url = `${this.cliURL}/${id$}.json`;
    return this.http.delete( url )
        .map ( res =>{console.log(res.json);
        	return res.json() } );
  }





}
