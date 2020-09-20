import { DispatchTypes } from "./Actions";
import { State } from "./State";

const baseHeaders = new Headers();
baseHeaders.append("Content-Type", "application/json");

export const doSomething = () => (
  dispatch: DispatchTypes,
  getState: () => State
) => {
  const { message } = getState();

  console.log(`Message: ${message} was passed to Redux`);
};
