import { createSlice } from "@reduxjs/toolkit"
import { addTodo, deleteTodo, fetchTodos, updateTodo } from "./todoThunks"
import { RootState } from "../../app/store"

export interface ITodoState {
  todos: ITodo[]
  status: "idle" | "loading" | "error" | "post-loading"
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
        state.status = "idle"
        state.todos.push(action.payload)
      })
      .addCase(addTodo.rejected, (state) => {
        state.status = "error"
      })
      .addCase(addTodo.pending, (state) => {
        state.status = "post-loading"
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = "idle"
        state.todos = action.payload
      })
      .addCase(fetchTodos.rejected, (state) => {
        state.status = "error"
      })
      .addCase(fetchTodos.pending, (state) => {
        state.status = "loading"
      })
      .addCase(updateTodo.pending, (state) => {
        state.status = "post-loading"
      })
      .addCase(updateTodo.rejected, (state) => {
        state.status = "error"
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        const todo = action.payload
        const todoIndex = state.todos.findIndex(
          (prevTodo) => prevTodo.id === todo.id
        )
        state.status = "idle"
        state.todos[todoIndex] = todo
      })
      .addCase(deleteTodo.pending, (state) => {
        state.status = "post-loading"
      })
      .addCase(deleteTodo.rejected, (state) => {
        state.status = "error"
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        const { id } = action.payload
        state.status = "idle"
        state.todos = state.todos.filter((todo) => todo.id !== id)
      })
  },
})

export const selectTodos = (state: RootState) => state.todos.todos
export const selectStatus = (state: RootState) => state.todos.status

export default todoSlice.reducer
