import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RegisterModal {
  isOpen: boolean;
}

const initialState: RegisterModal = {
  isOpen: false,
};

export const registerModalSlice = createSlice({
  name: "registerModal",
  initialState,
  reducers: {
    reset: () => initialState,
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { reset, openModal, closeModal } = registerModalSlice.actions;
export default registerModalSlice.reducer;
