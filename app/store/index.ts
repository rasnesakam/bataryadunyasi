import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import profileReducer from "./slices/profile";
import orderReducer from "./slices/order"

const makeStore = () => configureStore({
	reducer: {
		profile: profileReducer,
		order: orderReducer
	},
	devTools: true
});

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>

export const wrapper = createWrapper<AppStore>(makeStore);