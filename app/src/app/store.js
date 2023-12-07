import { configureStore } from "@reduxjs/toolkit"
import userReducer from "../features/user/userSlice"

export default configureStore({
  reducer: {
    user: userReducer,
    // Add the generated reducer as a specific top-level slice
  },
})
