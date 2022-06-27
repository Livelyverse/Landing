import { createSlice } from "@reduxjs/toolkit";
import { getUserName, getAccessToken, getRefreshToken } from "../Components/Util/helper";

const initialState = {
    loginItem: [],
    login: false,
    accToken: "",
    refToken: "",
    username: "",
}

const checkAdmin = createSlice({
    name: "adminLogin",
    initialState,
    reducers: {
        changeLogInStatus: (state) => {
            state.login = true;
            state.accToken = getAccessToken();
            state.refToken = getRefreshToken();
            state.username = getUserName();

        }
    }
})

export const { changeLogInStatus } = checkAdmin.actions;
export default checkAdmin.reducer;