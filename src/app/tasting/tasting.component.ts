import { Component, OnInit } from '@angular/core';

import Tiendas  from '../../assets/json/degustaciones.json';

@Component({
  selector: 'app-tasting',
  templateUrl: './tasting.component.html',
  styleUrls: ['./tasting.component.css']
})
export class TastingComponent implements OnInit {


tiendas = Tiendas;

  constructor() { }

  ngOnInit(): void {

  }




  pagination: number = 1;
  itemPerPage: number = 8;
  searchText: string = "";







}
