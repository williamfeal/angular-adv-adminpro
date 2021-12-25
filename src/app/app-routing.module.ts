import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { DashboardComponent } from '../../ferrera/angular-adv-adminpro-1.0.0/src/app/pages/dashboard/dashboard.component';
import { LoginComponent } from '../../ferrera/angular-adv-adminpro-1.0.0/src/app/auth/login/login.component';
import { RegisterComponent } from '../../ferrera/angular-adv-adminpro-1.0.0/src/app/auth/register/register.component';
import { ProgressComponent } from '../../ferrera/angular-adv-adminpro-1.0.0/src/app/pages/progress/progress.component';
import { Grafica1Component } from '../../ferrera/angular-adv-adminpro-1.0.0/src/app/pages/grafica1/grafica1.component';
import { NopagefoundComponent } from '../../ferrera/angular-adv-adminpro-1.0.0/src/app/pages/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  //Rutas protegidas
  //Las rutas hijas se muestras despues de ir al path principal que este caso es vacio
  //Cuando las paginas cumplen con el mismo template se pueden colocar como rutas hijas 
  { path: '', 
  component: PagesComponent,
  children: [
    { path: 'dashboard', component: DashboardComponent},
    { path: 'grafica1', component: Grafica1Component},
    { path: 'progress', component: ProgressComponent},
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
  ]   
  },
  
  //rutas publicas
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  
  //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NopagefoundComponent}

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
