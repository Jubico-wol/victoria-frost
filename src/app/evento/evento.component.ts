import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalEventoComponent} from './modal-evento/modal-evento.component';


@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openModal(id:any) {
    console.log(id);
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this.dialog.open(ModalEventoComponent, {
      width: 'auto',
      height: 'auto',
 
 
      disableClose: false,
      data: {id: id },
    });
  }




 


}
