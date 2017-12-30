import {Injectable} from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";
import {MatDialog} from "@angular/material";
import {ErrorDialog} from "../component/dialog/error/error.dialog";
import {Constant} from "../constant";

@Injectable()
export class UserService {

  constructor(private auth: AngularFireAuth,
              public dialog: MatDialog) {

  }

  isLogin() {
    return new Promise<boolean>(resolve => {
      this.auth.auth.onAuthStateChanged(user=>{
        if (user) {
          resolve(true)
        }else resolve(false)
      })
    })
  }

  authorizedFirebase(email,password) {
    return new Promise<boolean>(resolve => {
      if (this.auth.auth.currentUser) {
        resolve(true)
      } else this.auth.auth.signInWithEmailAndPassword(email, password)
        .then(res => {
          resolve(true)
        }, error => {
          this.handleError(error).then(()=>resolve(false))
        })
    })
  }

  logout() {
    return new Promise<boolean>(resolve => {
      this.auth.auth.signOut()
        .then(res=>{
          if (!res) {
            resolve(true)
          }else {
            resolve(false);
            this.dialog.open(ErrorDialog, {
              width: '250px',
              data: { title: "Logout error", message: res.message }
            });
          }
        })
    })
  }

  handleError(error) {
    return new Promise<boolean>(resolve => {
      let title = "Login error",message;
      if (error.code === Constant.ERROR_EMAIL){
        message = "Tài khoản email không tồn tại"
      }else if (error.code === Constant.ERROR_PASSWORD) {
        message = "Mật khẩu của bạn không chính xác"
      }
      let dialogRef = this.dialog.open(ErrorDialog, {
        width: '250px',
        data: { title: title, message: message }
      });

      dialogRef.afterClosed().subscribe(result => {
        resolve()
      });
    })
  }
}
