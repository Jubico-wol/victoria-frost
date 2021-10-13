

import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient , HttpParams , HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CheckService {

  constructor(private cookieService: CookieService, private http:HttpClient ) { }

  // headers = new Headers();

   headers= new HttpHeaders().set('content-type', 'application/json').set('Access-Control-Allow-Origin', '*');
  
  url= 'https://solutionsomg.com/api/Frost/promocion/';

  getToken(){
    this.cookieService.get('ASkjfwuihJKFH');
  }
  isLoggedIn(){
    return !!this.cookieService.get('ASkjfwuihJKFH');
  }

 




  // api BARCA

  getMuseuToken(){
    return this.http.get("https://solutionsomg.com/task/Token/h8F5yZhM");
  }

  // getQuestions(token:any) {
  //   this.headers.append("Access-Control-Allow-Methods","GET, POST");
  //   this.headers.append("Access-Control-Allow-Origin","*");
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${token}`
  //   })
  //   const body=JSON.stringify(token);
  //   return this.http.post("https://solutionsomg.com/api/Frost/preguntas/", token);
  // }

  getResultQuestions(obj:any){
    return this.http.post("https://solutionsomg.com/api/Frost/preguntas/2", obj);
  }


  getQuestionsByIP(ip, data){
    return this.http.post("https://solutionsomg.com/api/Frost/preguntas/" +ip, data);
  }




// API PROMOTION BEER FOR FREE

  getPromotionToken(){
    this.cookieService.get('promotion');
  }

  removeCookie(){
    this.cookieService.delete('promotion');
  }
  promotionCookieSet(obj){
    this.cookieService.set('promotion',obj);
  }
  isPromotionIn(){
    return !!this.cookieService.get('promotion');
  }


  async getPromotion(ip){

    
    this.headers.append("Access-Control-Allow-Methods","GET, POST");
    this.headers.append("Access-Control-Allow-Origin","*");
    return  this.http.get( this.url+ip)
  }

  postPromotion(ip, data){

  let promo = JSON.parse(localStorage.getItem('promo'));
  let tipo =  promo.promo;

  this.headers.append("Access-Control-Allow-Methods","GET, POST");
  this.headers.append("Access-Control-Allow-Origin","*");
  return this.http.post(this.url+ ip +'&'+ tipo, data);
  }

}
