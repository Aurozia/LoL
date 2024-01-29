import championsReducer from './champions.ts';
import rolesReducer from './roles.ts';
import typesReducer from './types.ts';

const reducer = {
  champions: championsReducer,
  roles: rolesReducer,
  types: typesReducer,
};

export default reducer;