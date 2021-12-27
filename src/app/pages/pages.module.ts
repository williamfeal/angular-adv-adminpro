import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*aqui podemos usar otra opcion que es buscar el modulo de Routermodule
import { RouterModule } from '@angular/router';*/

import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { SharedModule } from '../shared/shared.module';


/*este es un modulo con rutas autenticadas por eso 
el pagenofound no debe estar aca por que lo pueden ver 
personas no autenicadas o autenticadas
*/
/* Los exports deben ir antes de los imports*/


@NgModule({
  declarations: [
    DashboardComponent,
    Grafica1Component,
    PagesComponent,
    ProgressComponent
    
  ],
  exports: [  
    DashboardComponent,
    Grafica1Component,
    PagesComponent,
    ProgressComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    SharedModule
    
  ]
  
})
export class PagesModule { }
