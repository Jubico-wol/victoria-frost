import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-museu-modal-error',
  templateUrl: './museu-modal-error.component.html',
  styleUrls: ['./museu-modal-error.component.css']
})
export class MuseuModalErrorComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<MuseuModalErrorComponent>, private route: Router) { }

  ngOnInit(): void {
  }
  closeModal() {
    this.dialogRef.close();
  }

  end(){
    this.closeModal();
  }



  
  click(){
    this.route.navigate(['home']);
    this.closeModal();
  }



}