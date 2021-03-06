import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import firebase from 'firebase';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isCollapsed: boolean = true;
  user: Observable<firebase.User>;
  constructor(private authServ: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.user = this.authServ.authUser();
    
  }

  sair() {
    this.authServ.logout().then(() => this.router.navigate(['/']));
  }


}