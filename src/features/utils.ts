import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UtilsState {
  popUpPost: boolean;
  popUpMenu: boolean;
}

const initialState: UtilsState = {
  popUpPost: false,
  popUpMenu: false
};

const utilsSlice = createSlice({
  name: "utils",
  initialState,
  reducers: {
    setPopMenu(state: UtilsState, action: PayloadAction<boolean>) {
      state.popUpMenu = action.payload;
    },
    setPopUpPost(state: UtilsState, action: PayloadAction<boolean>) {
      state.popUpPost = action.payload;
    }
  }
});

export const { setPopMenu, setPopUpPost } = utilsSlice.actions;
export default utilsSlice.reducer;
