import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Constant} from "./constant";
import {Login} from "./component/login/login";
import {MainComponent} from "./component/main/main.component";
import {Banner} from "./component/banner/banner";
import {Dashboard} from "./component/dashboard/dashboard";

const routes: Routes = [
  { path: '', redirectTo: Constant.path_login, pathMatch: 'full' },
  { path: Constant.path_login, component: Login },
  { path: '', component:MainComponent,
    children: [
      { path: Constant.path_dashboard, component: Dashboard },
      { path: Constant.path_banner, component: Banner }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
