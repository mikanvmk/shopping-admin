import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Constant} from "../../constant";
import {Home} from "../home/home";
import {MainComponent} from "./main.component";

const routes: Routes = [
  { path: '', redirectTo: Constant.path_home, pathMatch: 'full' },
  {
    path: '', component: MainComponent,
    children: [
      { path: Constant.path_home, component: Home }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRouting { }
