import {NgModule} from '@angular/core';
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatIconModule, MatInputModule, MatMenuModule,
  MatTabsModule, MatToolbarModule, MatTooltipModule
} from "@angular/material";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import {AngularFireModule} from "angularfire2";
import {environment} from "../../../environments/environment";
import {MainComponent} from "./main.component";
import {MainRouting} from "./main.routing";
import {Home} from "../home/home";


@NgModule({
  declarations: [
    MainComponent,
    Home
  ],
  imports: [
    MainRouting,
    FormsModule,
    CommonModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    MatButtonModule, MatCheckboxModule, MatMenuModule, MatCardModule, MatInputModule, MatTabsModule , MatToolbarModule, MatIconModule,
    MatTooltipModule
  ]
})
export class MainModule {
}
