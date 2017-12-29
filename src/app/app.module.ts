import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MatButtonModule, MatCheckboxModule, MatInputModule, MatTooltip, MatTooltipModule
} from "@angular/material";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {FlexLayoutModule} from "@angular/flex-layout";
import {UserService} from "./service/user.service";
import {environment} from "../environments/environment";
import {AngularFireModule} from "angularfire2";
import {Login} from "./component/login/login";
import {AngularFireAuthModule} from "angularfire2/auth";


@NgModule({
  declarations: [
    AppComponent,
    Login
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    MatButtonModule, MatCheckboxModule, MatInputModule, MatTooltipModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
