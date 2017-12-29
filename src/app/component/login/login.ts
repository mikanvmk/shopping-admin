import {Component, ViewChild} from "@angular/core";
import {Constant} from "../../constant";
import {MatTooltip} from "@angular/material";
import {NgForm} from "@angular/forms";
import {UserService} from "../../service/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: "./login.html",
  styleUrls: ['./login.scss'],
  host: {'(document:keydown)': 'handleKeyboardEvent($event)'}
})

export class Login {

  @ViewChild('tooltip') tooltip : MatTooltip;
  @ViewChild('loginForm') loginForm : NgForm;
  public Constant = Constant;
  isCapslock = false;
  isFocus = false;

  constructor(private userService:UserService,
              private router:Router) {

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
      this.userService.authorizedFirebase(data.email,data.password)
        .then(res=>{
          if (res) {
            this.router.navigate([Constant.url_home])
          }
        })
    }
  }
}
