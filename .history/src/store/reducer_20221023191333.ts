import { State } from '../types/state';
import { Actions, ActionType } from '../types/action';

const initialState:State = {
  cityName: 'Paris',
};


const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.CityChange:
      return  {...state, cityName: action.payload};

    default:
      return state;
  }
};


export const selectCount = (state:State) => state.cityName;

export default reducer;
