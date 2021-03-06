import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal/modal.component';
import { stringify } from 'querystring';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(
    private router: Router,  
    private cookieService: CookieService,
    private route: ActivatedRoute ,
    public matDialog: MatDialog, 
    public dialog: MatDialog ) { }




    sub;   
    data;
    promo; 
  ngOnInit(): void {

    
      this.sub = this.route.data.subscribe((data) => {
 
        localStorage.setItem('promo', JSON.stringify(data));
        this.data = data;
        this.promo =  this.data.promo;

      });


    
  }

  day:any;
  month:any;
  year:any;



  private fecha = new Date();
  private ano = this.fecha.getFullYear();
  private edad;
  enter(){
  
  this.edad = this.ano - this.year ;
    if( this.day >31 || this.month >12 || this.year >this.ano ){
      this.modal();
    }
    else if(  this.day ==undefined || this.month ==undefined || this.year ==undefined ){
      this.modal();
    }
    else if(  this.day ==null || this.month ==null || this.year ==null ){
      this.modal();
    }
    else if(  this.day <=0 || this.month <=0  || this.year <=0  ){
      this.modal();
    }


        else{

            if(this.edad <18){ 
             this.modal();
            }
            if(this.edad >=18){   

              if(this.promo == "camisas"){
                this.cookieService.set( 'ASkjfwuihJKFH', 'Victoria Frost', {expires: 0.1, sameSite: 'Lax'});
                this.router.navigate(['museu']);
              }else{
                this.cookieService.set( 'ASkjfwuihJKFH', 'Victoria Frost', {expires: 0.1, sameSite: 'Lax'});
                this.router.navigate(['home']);
              }



        
            }
  
        }

  }






  modal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '600px',
    });
  }





}
