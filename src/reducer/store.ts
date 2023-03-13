import { configureStore } from "@reduxjs/toolkit";
import colorsSlice from "./colors";

const store = configureStore({
	reducer: {
		colorStorage: colorsSlice.reducer,
	},
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
