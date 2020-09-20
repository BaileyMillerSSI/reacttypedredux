import { Actions, ActionTypes } from "./Actions";
import { State, defaultState } from "./State";

export const Reducer = (
  state: State = defaultState,
  action: Actions
): State => {
  switch (action.type) {
    case ActionTypes.SetMessage:
      return {
        ...state,
        message: action.payload
      }
    default:
      return state;
  }
};
