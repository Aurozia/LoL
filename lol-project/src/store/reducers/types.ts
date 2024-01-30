import { createAction, createReducer } from "@reduxjs/toolkit";

// import data from '../../data';
import { typeData } from "../../data.tsx";
// import types from '../../types';
import { Type } from "../../types/types";

interface typesState {
  list: Type[];
  header: boolean;
}

export const initialState: typesState = {
  list: typeData,
  header: false,
};

export const typeList = createAction<boolean>("type/type-list");

const typesReducer = createReducer(initialState, (builder) => {
  builder.addCase(typeList, (state, action) => {
    state.header = action.payload;
  });
});

export default typesReducer;
