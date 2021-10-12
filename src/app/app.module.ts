import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CookieService } from 'ngx-cookie-service';
import  {MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';
// table pagination
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { ModalComponent } from './modal/modal/modal.component';
import { WinformComponent } from './winform/winform.component';

import { ModalWinnerComponent } from './modal/modal-winner/modal-winner.component';
import { ModalMessage2Component } from './modal/modal-message2/modal-message2.component';
import { ModalMessage3Component } from './modal/modal-message3/modal-message3.component';
import { ModalSuccessComponent } from './modal/modal-success/modal-success.component';
import { ModalErrorComponent } from './modal/modal-error/modal-error.component';
import { TastingComponent } from './tasting/tasting.component';
import { MuseuComponent } from './museu/museu.component';
import { QuestionsComponent } from './questions/questions.component';
import { ModalMuseuComponent } from './modal/modal-museu/modal-museu.component';
import { MuseuModalErrorComponent } from './modal/museu-modal-error/museu-modal-error.component';
import { MuseuModalSuccessComponent } from './modal/museu-modal-success/museu-modal-success.component';
import { ModalWaitingComponent } from './modal/modal-waiting/modal-waiting.component';
import { ProtocolComponent } from './protocol/protocol.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IndexComponent,
    ModalComponent,
    ModalWinnerComponent,
    WinformComponent,
    ModalSuccessComponent,
    ModalMessage2Component,
    ModalMessage3Component,
    ModalErrorComponent,
    TastingComponent,
    MuseuComponent,
    QuestionsComponent,
    ModalMuseuComponent,
    MuseuModalErrorComponent,
    MuseuModalSuccessComponent,
    ModalWaitingComponent,
    ProtocolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
