import { createSlice } from "@reduxjs/toolkit";

interface Prop {
	colors: Array<string>;
	primaryColor: string;
}

const initialColors = () => {
	let letters = "0123456789ABCDEF";
	let colorsArray: Array<string> = [];

	for (let i = 0; i < 6; i++) {
		let color: string = "#";
		for (let i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		colorsArray.push(color);
	}

	console.log(colorsArray);
	return colorsArray;
};

const initialState = {
	colors: initialColors(),
	primaryColor: "#000000",
} as unknown as Prop;
const colorsSlice = createSlice({
	name: "primaryColor",
	initialState,
	reducers: {
		addColor(state, action) {
			state.colors.push(action.payload);
			state.colors = state.colors.slice(1);
		},
		setPrimaryColor(state, action) {
			state.primaryColor = action.payload;
		},
	},
});

export const { addColor, setPrimaryColor } = colorsSlice.actions;
export default colorsSlice;
