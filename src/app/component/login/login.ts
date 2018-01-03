import {Component, OnInit, ViewChild} from "@angular/core";
import {Constant} from "../../constant";
import {MatTooltip} from "@angular/material";
import {NgForm} from "@angular/forms";
import {UserService} from "../../service/user.service";
import {Router} from "@angular/router";
import {routerTransition} from "../../service/routerTransition";

@Component({
  selector: 'login',
  templateUrl: "./login.html",
  styleUrls: ['./login.scss'],
  animations: [routerTransition()],
  host: {'(document:keydown)': 'handleKeyboardEvent($event)','[@routerTransition]': 'true'}
})

export class Login implements OnInit {

  @ViewChild('tooltip') tooltip: MatTooltip;
  @ViewChild('loginForm') loginForm: NgForm;
  public Constant = Constant;
  isCapslock = false;
  isFocus = false;
  isLoading = true;

  constructor(private userService: UserService,
              private router: Router) {

  }

  ngOnInit() {
    this.userService.isLogin()
      .then(res => {
        this.isLoading = false;
        if (res) {
          this.router.navigate([Constant.url_dashboard])
        } else this.router.navigate([Constant.url_login])
      });
  }

  onFocusPass() {
    this.isFocus = true;
  }

  onBlurPass() {
    this.isFocus = false;
  }

  handleKeyboardEvent(event: KeyboardEvent) {
    if (this.isFocus) {
      let caps = event.getModifierState && event.getModifierState('CapsLock');
      this.isCapslock = !!caps;
      this.tooltip.show()
    } else this.isCapslock = false;
  }

  onSubmit(data) {
    if (this.loginForm.form.valid) {
      this.isLoading = true;
      this.userService.authorizedFirebase(data.email, data.password)
        .then(res => {
          if (res === true) {
            this.router.navigate([Constant.url_dashboard])
          } else {
            this.isLoading = false;
          }
        })
    }
  }
}
