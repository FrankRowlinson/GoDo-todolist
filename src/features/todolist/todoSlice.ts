import { createSlice } from "@reduxjs/toolkit"
import { addTodo, fetchTodos } from "./todoThunks"
import { RootState } from "../../app/store"

export interface ITodoState {
  todos: ITodo[]
  status: "idle" | "loading" | "error"
}

const initialState: ITodoState = {
  todos: [],
  status: "idle",
}

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload)
      })
      .addCase(addTodo.rejected, (state) => {
        state.status = "error"
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = "idle"
        state.todos = action.payload
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = "error"
      })
      .addCase(fetchTodos.pending, (state) => {
        state.status = "loading"
      })
  },
})

export const selectTodos = (state: RootState) => state.todos.todos
export const selectStatus = (state: RootState) => state.todos.status

export default todoSlice.reducer
