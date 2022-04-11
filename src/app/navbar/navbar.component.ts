import { Component, OnInit } from '@angular/core';
import { Router  } from "@angular/router";
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  // (click)="onClick( '/esenciales', 'colors') " 

  // onClick(url:any, id:any){
  //   this.router.navigate([url], { fragment: `#`+id });
  //   this.viewportScroller.scrollToAnchor(elementId);
  // }

  url = "";
  s1:string ="";

  onClick(url:string,is:string) { 
    this.s1  = is;
    this.url = url;
      this.router.navigate([this.url], { fragment: this.s1 });
      // this.viewportScroller.scrollToAnchor(this.s1);
    //  window.scrollTo(0, 0);
    //  document.querySelector(this.url+ '#' +  this.s1 )?.scrollIntoView()
  }


}


