import { ViewportScroller } from '@angular/common';
import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { CheckService } from '../check.service';
import { HttpClient  } from '@angular/common/http';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalWinnerComponent } from '../modal/modal-winner/modal-winner.component';
import { ModalMessage2Component } from '../modal/modal-message2/modal-message2.component';
import { ModalMessage3Component } from '../modal/modal-message3/modal-message3.component';
import { ModalMuseuComponent } from '../modal/modal-museu/modal-museu.component';
import { CookieService } from 'ngx-cookie-service';







@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ipAddress = '';
  public clicked = true;


  constructor(
    private viewportScroller: ViewportScroller, 
    private cookieService: CookieService,
    private _api:CheckService, 
    private http:HttpClient,
    public matDialog: MatDialog, 
    public dialog: MatDialog,
    private renderer2: Renderer2,
    private elementRef: ElementRef
    ) { }



  ngOnInit(): void {
    this._api.removeCookie();
    localStorage.removeItem('session');
    // this.getIPAddress();

    // this.modaMuseu();



    

   
  }

  public onClick(elementId: string): void { 
      this.viewportScroller.scrollToAnchor(elementId);
  }

data:any;
ganador:any;
message;


async getIPAddress()
  {

    this.http.get("https://api.ipify.org/?format=json").subscribe(async (res:any)=>{
      this.ipAddress = res.ip;
   
        (await this._api.getPromotion(this.ipAddress)).subscribe(data=>{
        this.data = data;
        this.ganador = this.data.ganador;
        this.message = this.data.mensaje;
    

        if(this.ganador==true && this.message==1){
          this.modalWinner();
          this.cookieService.set( 'promotion', 'Victoria Frost', {expires: 0.1, sameSite: 'Lax'});
        }

        if(this.message==2){ this.modalMessage2(); }
        if(this.message==3){ this.modalMessage3(); }
      
      
      });

    });
  }




  modalWinner() {
  
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this.dialog.open(ModalWinnerComponent, {
      width: '600px',
      disableClose: false
    });
  }

  modalMessage2() {
  
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this.dialog.open(ModalMessage2Component, {
      width: '600px',
      disableClose: false
    });
  }


  modalMessage3() {
  
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this.dialog.open(ModalMessage3Component, {
      width: '600px',
      disableClose: false
    });
  }



  modaMuseu() {
  
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this.dialog.open(ModalMuseuComponent, {
      width: '800px',
      height: '425px',
      disableClose: true
    });
  }










}
