import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AyaComponent } from './aya/aya.component';
import { OneAyaComponent } from './one-aya/one-aya.component';


const routes: Routes = [
  { path: 'tabou', component:AyaComponent},
  { path: 'auth', component: AuthComponent },
  { path: '', component: AuthComponent },  
  { path: 'aya', component: OneAyaComponent }    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
