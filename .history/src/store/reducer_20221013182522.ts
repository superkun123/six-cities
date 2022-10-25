import { State } from '../types/state';
import { Actions, ActionType } from '../types/action';

const initialState:State = {
  cityName: 'Paris',
};

const currentCity = () => {
  const city = 'Amsterdam';
  return city;
};


const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.CityChange:
      return  {...state, cityName: currentCity()};

    default:
      return state;
  }
};

export default reducer;
