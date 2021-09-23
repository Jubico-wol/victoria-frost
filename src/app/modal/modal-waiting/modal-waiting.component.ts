import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-modal-waiting',
  templateUrl: './modal-waiting.component.html',
  styleUrls: ['./modal-waiting.component.css']
})
export class ModalWaitingComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModalWaitingComponent>) { }

  ngOnInit(): void {
  }
  closeModal() {
    this.dialogRef.close();
  }

  end(){
    this.closeModal();
  }

}
