import { ActionTypes, Actions, DispatchTypes } from "./Actions";
import { Middleware, Dispatch, MiddlewareAPI } from "redux";
import { State } from "./State";
import { doSomething } from "./ActionCreators";

const typesRequiringValidation = [
  ActionTypes.SetMessage
];

const actionTypeContains = (types: ActionTypes[], type: ActionTypes): boolean =>
  types.indexOf(type) !== -1;

const ValidationMiddleware: Middleware = (
  api: MiddlewareAPI<DispatchTypes, State>
) => (next: Dispatch<Actions>) => <A extends Actions>(action: A) => {
  const result = next(action);

  if (actionTypeContains(typesRequiringValidation, action.type)) {
    api.dispatch(doSomething());
  }

  return result;
};

export default ValidationMiddleware;
