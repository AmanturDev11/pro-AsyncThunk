import { createSlice } from "@reduxjs/toolkit";
import { getTodo } from "./todoThunk";

const initialState = {
	todo: [],
};

export const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getTodo.fulfilled, (state, { payload }) => {
			state.todo = payload;
		});
	},
});
