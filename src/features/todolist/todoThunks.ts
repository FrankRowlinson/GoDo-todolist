import { createAsyncThunk } from "@reduxjs/toolkit"
import todoAPI from "./todoAPI"

export const addTodo = createAsyncThunk(
  "todos/addTodo",
  async (todoName: string, thunkAPI) => {
    try {
      const response = await todoAPI.addTodo(todoName)
      return response
    } catch (e) {
      thunkAPI.rejectWithValue(e)
    }
  }
)

export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async (_, thunkAPI) => {
    try {
      const response = await todoAPI.fetchTodos()
      return response
    } catch (e) {
      thunkAPI.rejectWithValue(e)
    }
  }
)
