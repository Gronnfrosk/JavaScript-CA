import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Component/CartReducer.jsx";

export const Store = configureStore({
	reducer: {
		cart: cartReducer,
	},
});
