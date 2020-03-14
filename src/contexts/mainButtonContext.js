import React, { useContext } from "react";
import { useMachine } from "@xstate/react";
import { Machine } from "xstate";

export const MainDrawerState = {
  inactive: "inactive",
  showList: "showList",
  showDetail: "showDetail"
};
export const MainDrawerAction = {
  SHOW_LIST: "SHOW_LIST",
  SHOW_DETAIL: "SHOW_DETAIL",
  CLOSE: "CLOSE",
  PREVIOUS: "PREVIOUS",
  TOGGLE: "TOGGLE"
};

const mainDrawerMachine = Machine({
  id: "mainDrawer",
  initial: MainDrawerState.inactive,
  states: {
    [MainDrawerState.inactive]: {
      on: {
        [MainDrawerAction.SHOW_LIST]: MainDrawerState.showList,
        [MainDrawerAction.SHOW_DETAIL]: MainDrawerState.showDetail,
        [MainDrawerAction.TOGGLE]: MainDrawerState.showList,
        [MainDrawerAction.CLOSE]: MainDrawerState.inactive,
        [MainDrawerAction.PREVIOUS]: MainDrawerState.inactive
      }
    },
    [MainDrawerState.showList]: {
      on: {
        [MainDrawerAction.SHOW_LIST]: MainDrawerState.showList,
        [MainDrawerAction.SHOW_DETAIL]: MainDrawerState.showDetail,
        [MainDrawerAction.TOGGLE]: MainDrawerState.inactive,
        [MainDrawerAction.CLOSE]: MainDrawerState.inactive,
        [MainDrawerAction.PREVIOUS]: MainDrawerState.inactive
      }
    },
    [MainDrawerState.showDetail]: {
      on: {
        [MainDrawerAction.SHOW_LIST]: MainDrawerState.showList,
        [MainDrawerAction.SHOW_DETAIL]: MainDrawerState.showDetail,
        [MainDrawerAction.TOGGLE]: MainDrawerState.showList,
        [MainDrawerAction.CLOSE]: MainDrawerState.inactive,
        [MainDrawerAction.PREVIOUS]: MainDrawerState.showList
      }
    }
  }
});

export const MainButtonContext = React.createContext({
  state: MainDrawerState.inactive,
  send: () => {}
});
export const MainButtonContextProvider = ({ children }) => {
  const [state, send] = useMachine(mainDrawerMachine);

  const defaultContext = {
    state,
    send
  };
  return (
    <MainButtonContext.Provider value={defaultContext}>
      {children}
    </MainButtonContext.Provider>
  );
};
export const useMainButtonContext = () => useContext(MainButtonContext);
