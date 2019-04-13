import {Injectable} from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject
} from '@angular/fire/database';
import {AuthService} from '../../auth/auth.service';
import {User} from './user.model';
import {map} from 'rxjs/operators';

@Injectable()
export class UserService {
  usersRef: AngularFireList<any>;    // Reference to Student data list, its an Observable
  userRef: AngularFireObject<any>;
  user: any;

  constructor(private db: AngularFireDatabase, private authService: AuthService) {
    this.usersRef = this.db.list('/users');
    this.user = this.authService.getCurrentUser();
  }

  getUserData() {
    return this.db.object('users/' + this.user.uid).snapshotChanges();
  }

  getUserDataFromCode(code: string) {
    return this.db.object('users/' + code).snapshotChanges();
  }

  postUserData(user: User) {
    user.email = this.user.email;
    return this.usersRef.update(this.user.uid, user);
  }

}
