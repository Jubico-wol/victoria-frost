import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions  } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { CanAccessGuard} from './guards/can-access.guard';
import { WinformComponent } from './winform/winform.component';
import { PromotionGuard } from './guards/promotion.guard';
import { TastingComponent } from './tasting/tasting.component';
import { MuseuComponent} from './museu/museu.component';
import { QuestionsComponent } from './questions/questions.component'; 
import { ProtocolComponent } from './protocol/protocol.component';
import { EventoComponent } from './evento/evento.component';
import { Index2Component } from './index2/index2.component';
const routes: Routes = [

 
  {path:"", component: Index2Component},
  {path:"home", component:HomeComponent , canActivate: [CanAccessGuard]},
  {path:"eventos", component:EventoComponent, canActivate: [CanAccessGuard]},

  //{path:"index", component:Index2Component},

 // {path:"", component: IndexComponent, data : {promo: 'normal'}},
  // {path:"degustaciones", component:TastingComponent , canActivate: [CanAccessGuard]},
  // {path:"premio", component:WinformComponent , canActivate: [PromotionGuard]},
  // {path:"promo", component: IndexComponent, data : {promo : 'camisas'}},
  // {path:"protocolo", component:ProtocolComponent, canActivate: [CanAccessGuard]},
  // {path:"museu", component:MuseuComponent, canActivate: [CanAccessGuard]},
  // {path:"museu/preguntas", component:QuestionsComponent, canActivate: [CanAccessGuard]},
  // {path:"museu/premio", component:WinformComponent,  canActivate: [PromotionGuard] },
  // {path:"museu/preguntas/qr", component:QuestionsComponent, canActivate: [CanAccessGuard]},
  


  {path: "", redirectTo: "/", pathMatch: 'full' },
  { path: "**", redirectTo:  "/" } 
];

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled'
};

@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
