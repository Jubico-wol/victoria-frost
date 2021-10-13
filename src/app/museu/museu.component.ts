import { Component, OnInit } from '@angular/core';
import { CheckService } from '../check.service';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-museu',
  templateUrl: './museu.component.html',
  styleUrls: ['./museu.component.css']
})
export class MuseuComponent implements OnInit {

  constructor( private _api:CheckService, private cookieService: CookieService ) { }

  ngOnInit(): void {
    this.getToken();
    localStorage.removeItem('session');
    this._api.removeCookie();

  }




data;
token;

  getToken(){
      this._api.getMuseuToken().subscribe(data=>{
        this.data = data;
        this.token = this.data.token;
        localStorage.setItem('token', this.token);
      });
  }










  

}
