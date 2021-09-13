import { Component, OnInit } from '@angular/core';
import { CheckService } from '../check.service';
import { HttpClient , HttpParams , HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  constructor(private _api:CheckService,  private http:HttpClient ) { }


  token;
  ngOnInit(): void {

   this.token = localStorage.getItem('token');

   
   console.log(JSON.stringify(this.token))

   this.getQuestions(this.token);


  }

data;
questions;
pregunta1;
pregunta2;
pregunta3;
pregunta4;
pregunta5;

  getQuestions(val){

    this._api.getQuestions(val).subscribe(data=>{
      console.log(data[0]);
      this.data = data ;
      this.pregunta1 = data[0];
      this.pregunta2 = data[1];
      this.pregunta3 = data[2];
      this.pregunta4 = data[3];
      this.pregunta5 = data[4];
      this.questions = this.data.Pregunta;
    });


    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'Authorization': `Token ${val}`
    // })

    // let x = this.http.post("https://solutionsomg.com/api/Frost/preguntas/", {headers: headers}) ;
    // console.log(headers)
    // console.log(x)
    // return x ;


  }
  



  flag1= true;
  flag2= false;
  flag3= false;
  flag4= false;
  flag5= false;

  next(val){

    if(val==2){
      this.flag1= false;
      this.flag2= true;
      this.flag3= false;
      this.flag4= false;
      this.flag5= false;
    }

    if(val==3){
      this.flag1= false;
      this.flag2= false;
      this.flag3= true;
      this.flag4= false;
      this.flag5= false;
    }

    
    if(val==4){
      this.flag1= false;
      this.flag2= false;
      this.flag3= false;
      this.flag4= true;
      this.flag5= false;
    }

    
    if(val==5){
      this.flag1= false;
      this.flag2= false;
      this.flag3= false;
      this.flag4= false;
      this.flag5= true;
    }


      
    if(val==0){


      
    }








  }

}
