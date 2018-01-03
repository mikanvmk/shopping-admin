import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Constant} from "./constant";
import {Login} from "./component/login/login";
import {MainComponent} from "./component/main/main.component";
import {Home} from "./component/home/home";

const routes: Routes = [
  { path: '', redirectTo: Constant.path_login, pathMatch: 'full' },
  { path: Constant.path_login, component: Login },
  { path: Constant.path_main, component:MainComponent,
    children: [
      { path: Constant.path_home, component: Home }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
