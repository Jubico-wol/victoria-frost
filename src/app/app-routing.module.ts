import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { CanAccessGuard} from './guards/can-access.guard';
import { WinformComponent } from './winform/winform.component';
import { PromotionGuard } from './guards/promotion.guard';
import { TastingComponent } from './tasting/tasting.component';
import { MuseuComponent} from './museu/museu.component';
import { QuestionsComponent } from './questions/questions.component'; 

const routes: Routes = [
  {path:"", component: IndexComponent, data : {promo: 'normal'}},
  {path:"home", component:HomeComponent , canActivate: [CanAccessGuard]},




  // {path:"degustaciones", component:TastingComponent , canActivate: [CanAccessGuard]},
  // {path:"premio", component:WinformComponent , canActivate: [PromotionGuard]},



  {path:"promo", component: IndexComponent, data : {promo : 'camisas'}},
  {path:"museu", component:MuseuComponent, canActivate: [CanAccessGuard]},
  {path:"museu/preguntas", component:QuestionsComponent, canActivate: [CanAccessGuard]},
  {path:"museu/premio", component:WinformComponent,  canActivate: [PromotionGuard] },

  // {path:"museu/preguntas/qr", component:QuestionsComponent, canActivate: [CanAccessGuard]},
  

 
  {path: "", redirectTo: "/", pathMatch: 'full' },
  { path: "**", redirectTo:  "/" } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
