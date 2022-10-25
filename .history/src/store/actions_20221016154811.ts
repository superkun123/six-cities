import { ActionType, CityChangeAction } from '../types/action';

export const CityChange = ():CityChangeAction => ({
  type: ActionType.CityChange,
});
