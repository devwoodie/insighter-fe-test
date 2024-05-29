import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "../types";

const initialState: UserState = {
    searchDate: "",
    page: 1
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setSearchDate: (state, action) => {
            state.searchDate = action.payload
        },
        setPage: (state, action) => {
            state.page = action.payload
        },
    }
})

export const {
    setSearchDate,
    setPage
} = userSlice.actions

export default userSlice.reducer