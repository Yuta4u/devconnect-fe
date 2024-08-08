import { Login } from "@/api/api"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { jwtDecode } from "jwt-decode" // Pastikan jwtDecode diimpor dengan benar

const initialState = {
  loading: false,
  user: {},
}

// Thunk untuk login
export const userLogin: any = createAsyncThunk(
  "user/userLogin",
  async (data, { rejectWithValue }) => {
    try {
      const response = await Login(data)
      if (response.error) {
        return rejectWithValue(response.error)
      }
      if (response.status === 204) {
        return response
      } else if (response.status === 201) {
        const decodedToken = jwtDecode(response.token)
        return { status: 201, message: "Berhasil login", data: decodedToken }
      }
    } catch (error) {
      console.error("Error in loginUser thunk:", error)
    }
  }
)

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state) => {
      state.loading = true
      console.log("loading test...")
    })
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.user = action.payload.data
      state.loading = false
    })
    builder.addCase(userLogin.rejected, (state, action) => {
      console.log("gagal test")
      state.loading = true
    })
  },
})

export const actions = {
  ...userSlice.actions,
  userLogin,
}

export default userSlice.reducer
