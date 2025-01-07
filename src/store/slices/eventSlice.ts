import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EventState {
  isMouseDragging: boolean;
  mousePosition: { x: number; y: number };
}

const initialState: EventState = {
  isMouseDragging: false,
  mousePosition: { x: 0, y: 0 },
};

const counterSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    isMouseDragging: (state, action: PayloadAction<boolean>) => {
      state.isMouseDragging = action.payload;
    },
    onMousePosition: (
      state,
      action: PayloadAction<{ x: number; y: number }>
    ) => {
      state.mousePosition = action.payload;
    },
  },
});

export const { isMouseDragging, onMousePosition } = counterSlice.actions;
export default counterSlice.reducer;
