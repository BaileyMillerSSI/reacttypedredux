import { Dispatch } from "react";
import { ThunkDispatch } from "redux-thunk";

export type Actions =
    { type: ActionTypes.SetMessage, payload: string }

export enum ActionTypes {
    SetMessage = 'SET_MESSAGE'
}

export type DispatchTypes = Dispatch<Actions> & ThunkDispatch<{}, {}, Actions>;