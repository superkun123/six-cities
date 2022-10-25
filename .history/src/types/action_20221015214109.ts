export enum ActionType  {
    CityChange = 'CityChange'
}

export type CityChangeAction = {
    type: ActionType.CityChange
}

export type Actions = CityChangeAction
