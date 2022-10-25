import { ActionType, CityChangeAction } from '../types/action';

export const CityChange = (currentCity:string):CityChangeAction => ({
  type: ActionType.CityChange,
  payload: currentCity,
});
