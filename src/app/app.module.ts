import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatDialogModule, MatExpansionModule, MatIconModule, MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
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
import {LoadingDialog} from "./component/dialog/loading.dialog";
import {MainComponent} from "./component/main/main.component";
import {Banner} from "./component/banner/banner";
import {SwiperModule} from "angular2-useful-swiper/lib/swiper.module";
import {FileUploadModule} from "ng2-file-upload";
import {MzCollapsibleModule} from "ng2-materialize";
import {Dashboard} from "./component/dashboard/dashboard";
import {Card} from "./component/card/card";
import {NgxChartsModule} from "@swimlane/ngx-charts";


@NgModule({
  declarations: [
    AppComponent,
    Login,
    MainComponent,
    Banner,
    ErrorDialog,
    Loading,
    LoadingDialog,
    Dashboard,
    Card
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
    SwiperModule,
    MatButtonModule, MatCheckboxModule, MatInputModule, MatTooltipModule,MatDialogModule,
    FileUploadModule, MatMenuModule, MatCardModule, MatTabsModule , MatToolbarModule, MatIconModule,
    MatSidenavModule, MatExpansionModule , MatListModule , MzCollapsibleModule,
    NgxChartsModule
  ],
  entryComponents: [ErrorDialog,LoadingDialog],
  providers: [UserService,UploadService,LoadingDialog],
  bootstrap: [AppComponent]
})
export class AppModule {
}
