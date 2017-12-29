import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Constant} from "./constant";
import {Login} from "./component/login/login";

const routes: Routes = [
  { path: '', redirectTo: Constant.path_login, pathMatch: 'full' },
  { path: Constant.path_login, component: Login },
  { path: Constant.path_main, loadChildren: Constant.url_module_main },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
