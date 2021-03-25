import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { from, Observable } from 'rxjs'
import { switchMap } from 'rxjs/operators'
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database'

@Injectable({
  providedIn: 'root'
})
export class MysiteServerService {
  private readonly db: firebase.database.Database;

  constructor() { 
    this.db = firebase.initializeApp(environment.firebase).database();
  }

  public saveUserInfo() {
    firebase.auth().signInAnonymously();
    firebase.auth().onAuthStateChanged((user) => {
      this.getIp().pipe(
        switchMap((res: Response) => 
          from(res.body.getReader().read())
        )
      ).subscribe(({done, value}) => {
        if (user) {
          var uid = user.uid;
          var date = new Date();

          var enc = new TextDecoder("utf-8");
          const data = JSON.parse(enc.decode(value));
          
          this.saveInfoToFirebase(`visitors/${uid}`, {
            date: `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
            country: data['country'] || data['country_name'] || 'unknown',
            city: data['city'] || 'unknown'
          });
        }
      })
    });
  }

  private getIp(): Observable<Response> {
    return from(fetch(`${environment.cloudrun.host}${environment.cloudrun.paths.fetchIp}`));
  }

  private saveInfoToFirebase(path: string, data: any) {
    this.db.ref(path).set(data);
  }
}
