import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-museu-modal-success',
  templateUrl: './museu-modal-success.component.html',
  styleUrls: ['./museu-modal-success.component.css']
})
export class MuseuModalSuccessComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<MuseuModalSuccessComponent>, private route: Router) { }

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