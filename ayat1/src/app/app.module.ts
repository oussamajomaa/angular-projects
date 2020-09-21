import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AyaService } from './services/aya.service';
import { FormsModule } from '@angular/forms';
import { AyaViewComponent } from './aya-view/aya-view.component';
import { AuthComponent } from './auth/auth.component';
import { AyaComponent } from './aya/aya.component';
import { AuthService } from './services/auth.service';
import { OneAyaComponent } from './one-aya/one-aya.component';
import { SouraComponent } from './soura/soura.component';
import { Page404Component } from './page404/page404.component';
import { AuthGuardService } from './services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    AyaViewComponent,
    AuthComponent,
    AyaComponent,
    OneAyaComponent,
    SouraComponent,
    Page404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    AyaService,
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
