import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "../types";

const initialState: UserState = {
    searchDate: "",
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setSearchDate: (state, action) => {
            state.searchDate = action.payload
        },
    }
})

export const {
    setSearchDate,

} = userSlice.actions

export default userSlice.reducer