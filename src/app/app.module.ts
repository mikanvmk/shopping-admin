import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MatButtonModule, MatCheckboxModule, MatDialogModule, MatInputModule, MatTooltipModule
} from "@angular/material";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {FlexLayoutModule} from "@angular/flex-layout";
import {UserService} from "./service/user.service";
import {environment} from "../environments/environment";
import {AngularFireModule} from "angularfire2";
import {Login} from "./component/login/login";
import {AngularFireAuthModule} from "angularfire2/auth";
import {ErrorDialog} from "./component/dialog/error/error.dialog";
import {Loading} from "./service/loading";
import {UploadService} from "./uploads/shared/upload.service";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFirestoreModule} from "angularfire2/firestore";


@NgModule({
  declarations: [
    AppComponent,
    Login,
    ErrorDialog,
    Loading
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
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    MatButtonModule, MatCheckboxModule, MatInputModule, MatTooltipModule,MatDialogModule
  ],
  entryComponents: [ErrorDialog],
  providers: [UserService,UploadService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
