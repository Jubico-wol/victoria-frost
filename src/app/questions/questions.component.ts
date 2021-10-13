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
      this._api.removeCookie();
      // console.log(JSON.stringify(this.token));
      localStorage.removeItem('session');
      this.getQuestions(this.token);
      this._api.removeCookie();

  }


ipAddress = '';
result;
success;
err;
error;


data;
questions;
pregunta1;
pregunta2;
pregunta3;
pregunta4;
pregunta5;


ip;
ipFlag=false;



  getQuestions(val){


      this.http.get("https://api.ipify.org/?format=json").subscribe((res:any)=>{
          this.ipAddress = res.ip;
          // console.log(this.ipAddress);

          this._api.getQuestionsByIP(this.ipAddress, val).subscribe(data =>{
        
              this.data = data ;
              this.ip = this.data.result;
          

              // console.log(this.ip);

              if(this.ip == 'ip no valida'){
               
                this.flag1= false;
                this.flag2= false;
                this.flag3= false;
                this.flag4= false;
                this.flag5= false;
                this.flagMesssage = false;
                this.flagMessageError= false;
                this.ipFlag=true;

              }else{

                this.pregunta1 = data[0];
                this.pregunta2 = data[1];
                this.pregunta3 = data[2];
                this.pregunta4 = data[3];
                this.pregunta5 = data[4];
                this.questions = this.data.Pregunta;

              }




          })


      })

  }



  checkedIDs = [];
  
  p1:any;
  p2:any;


  changeSelection($event:any, name:any, next:any) {
    
    this.checkedIDs = []

  


    // console.log(this.checkedIDs);

    const id = $event.target.value;
    // console.log(name, $event.target.value);
    // console.log($event);


    this.p1={
      pregunta: name,
      respuesta: $event.target.value
    }



    this.checkedIDs.push(this.p1);



    var a = [];
    // Parse the serialized data back into an aray of objects
    a = JSON.parse(localStorage.getItem('session')) || [];
    // Push the new data (whether it be an object or anything else) onto the array
    a.push(this.p1);
    // Alert the array value
    // alert(a);  // Should be something like [Object array]
    // Re-serialize the array back into a string and store it in localStorage
    localStorage.setItem('session', JSON.stringify(a));



    this.next(next);



  }

  flag1= true;
  flag2= false;
  flag3= false;
  flag4= false;
  flag5= false;
  flagMesssage= false;
  flagMessageError= false;
  messageData;
  winnerMessage1;
  winnerMessage2;
  errorMessage1;
  errorMessage2;

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
      this.flag1= false;
      this.flag2= false;
      this.flag3= false;
      this.flag4= false;
      this.flag5= false;
  

      let obj = JSON.parse(localStorage.getItem('session'));
      console.log(obj)

      this._api.getResultQuestions(obj).subscribe(data=>{

        this.data = data ;
        this.messageData = this.data;

        console.log(data)


        if(this.messageData.ganador == true){
          this.flagMesssage= true;
          let val = "MuseuBarca";
          this._api.promotionCookieSet(val);
        }

        
        if(this.messageData.ganador == false){
          this.flagMessageError= true;
          this.errorMessage1 = "¡HAS FALLADO!"
          this.errorMessage2 = "VOLVÉ A INTENTARLO EL DÍA DE MAÑANA"
        }





      });

      
    }







  }

}
