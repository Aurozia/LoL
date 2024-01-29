import { createAction, createReducer } from '@reduxjs/toolkit';

// import data from '../../data';
import { roleData } from '../../data.tsx';
// import types from '../../types';
import { Role } from '../../types/types';

interface rolesState {
  list: Role[];
  header: boolean;
}
export const initialState: rolesState = {
  list: roleData,
  header: false,
};

export const roleList = createAction<boolean>('role/role-list')

const rolesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(roleList, (state) => {
      state.header = !state.header;
    });
});

export default rolesReducer;