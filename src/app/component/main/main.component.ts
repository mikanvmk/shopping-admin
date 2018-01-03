import {AfterViewInit, Component, OnInit} from '@angular/core';
import {UserService} from "../../service/user.service";
import {Router} from "@angular/router";
import {Constant} from "../../constant";
import {routerTransition} from "../../service/routerTransition";

@Component({
  selector: 'main-root',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': 'true'}
})
export class MainComponent implements OnInit{

  public Constant = Constant;
  title = null;
  user = null;
  constructor(
    public userService:UserService,
    private router:Router
  ){}


  ngOnInit() {
    this.userService.isLogin()
      .then(res => {
        if (res) {
          this.user = this.userService.information();
          this.title = location.pathname.substring(1,location.pathname.length)
        } else this.router.navigate([Constant.url_login])
      });
  }

  logout() {
    this.userService.logout()
      .then(res=>{
        if (res) {
          this.router.navigate([Constant.url_login])
        }
      })
  }

  closeFunctionCallback() {

  }

  openFunctionCallback() {

  }
}
