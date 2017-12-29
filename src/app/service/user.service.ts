import {Injectable} from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";

@Injectable()
export class UserService {

  constructor(private auth: AngularFireAuth) {

  }

  authorizedFirebase(email,password) {
    return new Promise<any>(resolve => {
      if (this.auth.auth.currentUser) {
        resolve(true)
      } else this.auth.auth.signInWithEmailAndPassword(email, password)
        .then(res => {
          resolve(true)
        }, error => {
          // this.dialog.showError(this.translate.instant('error.server'));
          resolve(false)
        })
    })
  }
}
