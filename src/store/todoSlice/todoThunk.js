import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = import.meta.env.VITE_BASE_URL;

export const getTodo = createAsyncThunk(
	"todo/getTodo",
	async (_, { rejectWithValue }) => {
		try {
			const response = await axios.get(URL);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const postTodos = createAsyncThunk(
	"todo/postTodos",
	async (data, { rejectWithValue, dispatch }) => {
		try {
			await axios.post(URL, data);
			dispatch(getTodo());
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const deleteTodo = createAsyncThunk(
	"todo/deleteTodo",
	async (id, { rejectWithValue, dispatch }) => {
		try {
			await axios.delete(`${URL}/${id}`);
			dispatch(getTodo());
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const deleteAllTodo = createAsyncThunk(
	"todo/deleteAllTodo",
	async (_, { rejectWithValue, dispatch }) => {
		try {
			await axios.delete(URL);
			dispatch(getTodo());
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const updateTodo = createAsyncThunk(
	"todo/updateTodo",
	async ({ _id, title }, { rejectWithValue, dispatch }) => {
		try {
			const response = await axios.put(`${URL}/${_id}`, { title });
			dispatch(getTodo());
			return response.data;
		} catch (error) {
			console.error("Error updating todo:", error.response.data);
			return rejectWithValue(error.response.data);
		}
	}
);
