import type { Action } from "@/store";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

export type IndexCtrl = {
  sort: string;
};

export interface State {
  indexCtrl: IndexCtrl;
}

const initialState: State = {
  indexCtrl: {
    sort: "name",
  },
};

export const slice = createSlice({
  name: "artifacts",
  initialState,
  reducers: {
    setIndexCtrl(state, action: PayloadAction<Action<State["indexCtrl"]>>) {
      const payload = action.payload;
      if (typeof payload === "function") {
        state.indexCtrl = payload(state.indexCtrl);
      } else {
        state.indexCtrl = payload;
      }
    },
  },
});

export const actions = slice.actions;

export const reducer = slice.reducer;

export const selectors = {
  selectIndexCtrl: (state: { artifacts: State }) => state.artifacts.indexCtrl,
};

export const useArtifactsSelector = () => {
  const indexCtrl = useSelector(selectors.selectIndexCtrl);

  return {
    indexCtrl,
  };
};

export const useArtifactsActions = () => {
  const dispatch = useDispatch();

  return {
    setIndexCtrl: (value: Action<State["indexCtrl"]>) =>
      dispatch(actions.setIndexCtrl(value)),
    resetIndexCtrl: () =>
      dispatch(actions.setIndexCtrl(initialState.indexCtrl)),
  };
};

export const useArtifactsStore = () => {
  const selectors = useArtifactsSelector();
  const actions = useArtifactsActions();

  return {
    ...selectors,
    actions,
  };
};
