import { Component, OnInit } from '@angular/core';
import { CheckService } from '../check.service';


@Component({
  selector: 'app-museu',
  templateUrl: './museu.component.html',
  styleUrls: ['./museu.component.css']
})
export class MuseuComponent implements OnInit {

  constructor( private _api:CheckService) { }

  ngOnInit(): void {
this.getToken();

  }




data;
token;

  getToken(){
      this._api.getMuseuToken().subscribe(data=>{
        this.data = data;
        this.token = this.data.token;
        console.log(this.token);
        localStorage.setItem('token', this.token);
      });
  }









  

}
