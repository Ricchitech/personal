import { useContext } from "react";
import StateManager from "./BaseContext";

// Base Context Dispatcher
export const EntireStates = () => {
  const allContextData = useContext(StateManager);
  return allContextData;
};
