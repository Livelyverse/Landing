import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    paginationItem: [],
    offset: "10",
    page: "0",
    sortBy: "time",
    sortType: "ASC",

}

const checkPagination = createSlice({
    name: "pagination",
    initialState,
    reducers: {
        changeOffset: (state, { payload }) => {
            state.offset = payload;
            state.page = "0";
        },
        changePage: (state, { payload }) => {
            state.page = payload;
        },
        changeSortBy: (state, { payload }) => {
            state.sortBy = payload;
        },
        changeSortType: (state, { payload }) => {
            state.sortType = payload;
        }
    }
})

export const { changeOffset, changePage, changeSortBy, changeSortType } = checkPagination.actions;
export default checkPagination.reducer;