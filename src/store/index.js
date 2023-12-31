import { configureStore } from "@reduxjs/toolkit";
import trainerSlice from "./slices/trainer.slice";

export default configureStore({
  reducer: {
    trainer: trainerSlice,
    // Here we will be adding reducers
  },
});
