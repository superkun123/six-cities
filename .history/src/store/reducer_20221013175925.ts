import { State } from '../types/state';
import { Actions, ActionType } from '../types/action';

const initialState:State = {
  cityName: 'Paris',
};

const changeCity = (newCity:string) => {
  initialState.cityName = newCity;
  return initialState;
};


const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.CityChange:
      return changeCity('Amsterdam');

    default:
      return state;
  }
};

export default reducer;
