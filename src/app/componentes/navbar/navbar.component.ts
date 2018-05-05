import { Component, OnInit } from '@angular/core';
import {AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
	public isLogin: boolean;
	public nombreUsuario: string;
	public emailUsuario: string;
  public fotoUsuario: string;

  constructor(public authService:AuthService) { }

  ngOnInit() {
  this.authService.getAuth().subscribe( auth => {

  	if (auth){
  		this.isLogin=true;
  		this.nombreUsuario=auth.displayName;
  		this.emailUsuario=auth.email;
      if(auth.photoURL){
      this.fotoUsuario=auth.photoURL;
      }
      else{
        this.fotoUsuario = "https://firebasestorage.googleapis.com/v0/b/agilehome-fe94b.appspot.com/o/img%2FsinFoto.jpg?alt=media&token=a73b9c71-530a-453b-865b-3753e07932d2";
      }
  	}
  	else{
  		this.isLogin=false;
  	}
  })
  }

  onClickLogout(){
  	this.authService.logout();
  }
}
