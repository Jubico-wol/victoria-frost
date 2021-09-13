import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-modal-museu',
  templateUrl: './modal-museu.component.html',
  styleUrls: ['./modal-museu.component.css']
})
export class ModalMuseuComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalMuseuComponent>
  ) { }

  ngOnInit(): void {
  }



  onNoClick(): void {
    this.dialogRef.close();
  }

  closeModal() {
    this.dialogRef.close();
  }


play(){
  
}



}
