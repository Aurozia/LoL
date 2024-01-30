import { createAction, createReducer } from '@reduxjs/toolkit';

// import data from '../../data';
import { championData } from '../../data.tsx';
// import types from '../../types';
import { Champion } from '../../types/types';

interface ChampionsState {
  list: Champion[];
  header: boolean;
}

export const initialState: ChampionsState = {
  list: championData,
  header: false,
};

export const championList = createAction<boolean>('champion/champion-list')

const championsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(championList, (state, action) => {
      state.header = action.payload;
    });
});

export default championsReducer;