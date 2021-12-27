import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { PagesModule } from './pages/pages.module';
//import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,  
    NopagefoundComponent
       
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    AuthModule,
    PagesModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
