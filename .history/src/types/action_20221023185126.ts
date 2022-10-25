export enum ActionType  {
    CityChange = 'CityChange'
}

export type CityChangeAction = {
    type: ActionType.CityChange,
    payload: string
}

export type Actions = CityChangeAction
