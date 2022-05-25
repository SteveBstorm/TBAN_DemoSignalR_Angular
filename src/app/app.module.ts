import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';

import {HttpClientModule} from '@angular/common/http';
import { ListComponent } from './components/list/list.component';
import { AddarticleComponent } from './components/addarticle/addarticle.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    ListComponent,
    AddarticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
