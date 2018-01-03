import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database";
import {FirebaseListObservable} from "angularfire2/database-deprecated";
import {Upload} from "./upload";
import {AngularFirestore} from "angularfire2/firestore";
import * as firebase from "firebase";

@Injectable()
export class UploadService {

  constructor(private db: AngularFireDatabase , private firebase:AngularFirestore) { }
  private basePath:string = '/banner';
  uploads: FirebaseListObservable<Upload[]>;
  pushUpload(upload: Upload) {
    return new Promise<any>(resolve => {
      let storageRef = this.firebase.app.storage().ref();
      let uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);
      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot:any) =>  {
          // upload in progress
          upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        },
        (error) => {
          // upload failed
          console.log(error)
        },
        () => {
          // upload success
          upload.url = uploadTask.snapshot.downloadURL;
          upload.name = upload.file.name;
          resolve(upload.url);
          // this.saveFileData(upload)
        }
      );
    })
  }
  // Writes the file details to the realtime db
  private saveFileData(upload: Upload) {
    this.db.list(`${this.basePath}/`).push(upload);
  }

  deleteUpload(upload: Upload) {
    this.deleteFileData(upload.$key)
      .then( () => {
        this.deleteFileStorage(upload.name)
      })
      .catch(error => console.log(error))
  }

  deleteFile(url:string) {
    return new Promise<boolean>(resolve => {
      let name = url.substring(url.indexOf('%2F')+3,url.indexOf('?'));
      let storageRef = this.firebase.app.storage().ref();
      storageRef.child(`${this.basePath}/${name}`).delete()
        .then(()=>resolve(true))
        .catch(()=>resolve(false))
    })
  }
  // Deletes the file details from the realtime db
  private deleteFileData(key: string) {
    return this.db.list(`${this.basePath}/`).remove(key);
  }
  // Firebase files must have unique names in their respective storage dir
  // So the name serves as a unique key
  private deleteFileStorage(name:string) {
    let storageRef = firebase.storage().ref();
    storageRef.child(`${this.basePath}/${name}`).delete()
  }
}
