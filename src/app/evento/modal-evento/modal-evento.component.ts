import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-modal-evento',
  templateUrl: './modal-evento.component.html',
  styleUrls: ['./modal-evento.component.css']
})
export class ModalEventoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalEventoComponent>,
     @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit(): void {
  }


  
  onNoClick(): void {
    this.dialogRef.close();
  }

  closeModal() {
    this.dialogRef.close();
  }
  
}


export interface DialogData {
  id:number;
}