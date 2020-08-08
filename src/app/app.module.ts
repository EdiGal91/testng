import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import { LoginService } from './providers/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UserService } from './providers/user.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePageComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    HttpClientModule
  ],
  providers: [
    LoginService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
