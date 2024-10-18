import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import { addUser, deleteUser } from 'src/app/store/user/user.actions';

@Component({
  selector: 'app-classic-reducer-demo',
  templateUrl: './classic-reducer-demo.component.html',
})
export class ClassicReducerDemoComponent {
  users$ = this.store.select((state: any) => state.users.users);

  constructor(private store: Store) {}

  addUser() {
    const newUser: User = {
      id: Math.random(),
      username: 'New User',
      password: 'password',
      created_at: new Date().toISOString(),
      modified_at: new Date().toISOString(),
    };
    this.store.dispatch(addUser({ user: newUser }));
  }

  deleteUser(userId: number) {
    this.store.dispatch(deleteUser({ id: userId }));
  }
}
