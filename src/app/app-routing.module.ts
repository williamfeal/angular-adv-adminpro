import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

//Modulos
import { AuthRoutingModule } from './auth/auth.routing';
import { PagesRoutingModule } from './pages/pages.routing';

//Componentes independientes
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

const routes: Routes = [
  //Rutas protegidas
  //Las rutas hijas se muestras despues de ir al path principal que este caso es vacio
  //Cuando las paginas cumplen con el mismo template se pueden colocar como rutas hijas 
  /*{ path: '', 
  component: PagesComponent,
  children: [
    { path: 'dashboard', component: DashboardComponent},
    { path: 'grafica1', component: Grafica1Component},
    { path: 'progress', component: ProgressComponent},
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
  ]   
  },*/
  
  //rutas publicas
  /*{ path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent},*/
  
  //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },

  /*El vacio y el que no tenga declarado colocarlo en el 
    approuting principal*/
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NopagefoundComponent}

];

@NgModule({
    imports: [
    RouterModule.forRoot( routes ),
    AuthRoutingModule,
    PagesRoutingModule

  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
