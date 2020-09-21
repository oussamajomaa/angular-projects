import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AyaComponent } from './aya/aya.component';
import { OneAyaComponent } from './one-aya/one-aya.component';
import { Page404Component } from './page404/page404.component';
import { AuthGuardService } from './services/auth-guard.service';
import { SouraComponent } from './soura/soura.component';


const routes: Routes = [
  { path: 'ayat', canActivate:[AuthGuardService], component:AyaComponent},
  { path: 'auth', component: AuthComponent },  
  { path: 'ayat/:id', canActivate: [AuthGuardService], component: OneAyaComponent },
  { path: 'ayat/:id/:idSoura', component: SouraComponent },
  { path: '', component: AuthComponent },
  { path: 'not-found', component: Page404Component},
  { path: '**', redirectTo:'/not-found' }   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
