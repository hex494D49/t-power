export const codeSnippets = {
    classic: {
      actions: `
  import { createAction, props } from '@ngrx/store';
  import { User } from '../../models/user.model';
  
  export const addUser = createAction('[User] Add User', props<{ user: User }>());
  export const updateUser = createAction('[User] Update User', props<{ user: User }>());
  export const deleteUser = createAction('[User] Delete User', props<{ id: number }>());
      `,
      reducer: `
  import { createReducer, on } from '@ngrx/store';
  import { User } from '../../models/user.model';
  import * as UserActions from './user.actions';
  
  export interface UserState {
    users: User[];
  }
  
  const initialState: UserState = {
    users: []
  };
  
  export const userReducer = createReducer(
    initialState,
    on(UserActions.addUser, (state, { user }) => ({ ...state, users: [...state.users, user] })),
    on(UserActions.updateUser, (state, { user }) => ({
      ...state,
      users: state.users.map((u) => (u.id === user.id ? user : u))
    })),
    on(UserActions.deleteUser, (state, { id }) => ({
      ...state,
      users: state.users.filter((u) => u.id !== id)
    }))
  );
      `,
    },
    entity: {
      actions: `
  import { createAction, props } from '@ngrx/store';
  import { User } from '../../models/user.model';
  
  export const loadUsersSuccess = createAction('[User] Load Users Success', props<{ users: User[] }>());
  export const addUser = createAction('[User] Add User', props<{ user: User }>());
  export const updateUser = createAction('[User] Update User', props<{ user: User }>());
  export const deleteUser = createAction('[User] Delete User', props<{ id: number }>());
      `,
      reducer: `
  import { createEntityAdapter, EntityState } from '@ngrx/entity';
  import { createReducer, on } from '@ngrx/store';
  import { User } from '../../models/user.model';
  import * as UserActions from './user.actions';
  
  export interface UserState extends EntityState<User> {}
  
  export const userAdapter = createEntityAdapter<User>();
  
  const initialState: UserState = userAdapter.getInitialState();
  
  export const userReducer = createReducer(
    initialState,
    on(UserActions.loadUsersSuccess, (state, { users }) => userAdapter.setAll(users, state)),
    on(UserActions.addUser, (state, { user }) => userAdapter.addOne(user, state)),
    on(UserActions.updateUser, (state, { user }) => userAdapter.updateOne({ id: user.id, changes: user }, state)),
    on(UserActions.deleteUser, (state, { id }) => userAdapter.removeOne(id, state))
  );
      `,
    },
    generics: {
      reducer: `
  import { createEntityAdapter, EntityState } from '@ngrx/entity';
  import { createReducer, on } from '@ngrx/store';
  import { Action } from '@ngrx/store';
  
  export function createGenericReducer<T>(adapter: ReturnType<typeof createEntityAdapter<T>>) {
    const initialState: EntityState<T> = adapter.getInitialState();
  
    return createReducer(
      initialState,
      on(addEntity, (state, { entity }) => adapter.addOne(entity, state)),
      on(updateEntity, (state, { entity }) => adapter.updateOne({ id: entity.id, changes: entity }, state)),
      on(deleteEntity, (state, { id }) => adapter.removeOne(id, state))
    );
  }
      `,
    }
  };
  