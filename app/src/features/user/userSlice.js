import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { API_BASE_URL } from "../../utils/api"

export const login = createAsyncThunk("user/login", async (user, thunkAPI) => {
  try {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
    const data = await response.json()
    if (data.status !== 200) {
      return thunkAPI.rejectWithValue(data.message)
    } else {
      return data.body.token
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.message)
  }
})

export const getProfile = createAsyncThunk("user/getProfile", async (token, thunkAPI) => {
  try {
    const response = await fetch(`${API_BASE_URL}/profile`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    const data = await response.json()
    if (data.status !== 200) {
      return thunkAPI.rejectWithValue(data.message)
    } else {
      return data.body
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.message)
  }
})

export const updateProfile = createAsyncThunk("user/updateProfile", async (profile, thunkAPI) => {
  try {
    const response = await fetch(`${API_BASE_URL}/profile`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${profile.token}`,
      },
      body: JSON.stringify(profile.profile),
    })
    const data = await response.json()
    if (data.status !== 200) {
      return thunkAPI.rejectWithValue(data.message)
    } else {
      return data.body
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.message)
  }
})

// The initial state of the User container before fetching data
export const initialState = {
  user: null,
  profile: null,
  status: "idle",
  error: null,
}

// The User container slice
export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    logout: (state) => {
      state.user = null
      state.profile = null
      state.status = "idle"
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading"
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.user = action.payload
        state.error = null
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.payload
      })
      .addCase(getProfile.pending, (state) => {
        state.status = "loading"
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.profile = action.payload
        state.error = null
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.payload
      })
      .addCase(updateProfile.pending, (state) => {
        state.status = "loading"
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.profile = action.payload
        state.error = null
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.payload
      })
  },
})

// Export the actions generated from the slice
export const { logout } = userSlice.actions
// Export the selector
export default userSlice.reducer
