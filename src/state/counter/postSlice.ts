import getPost from "@/api/post-api"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const initialState = {
  joblist: [],
}

// Thunk untuk login
export const getAllPost: any = createAsyncThunk(
  "post/getAllPost",
  async (data, { rejectWithValue }) => {
    try {
      const response = await getPost()
      if (response.error) {
        return rejectWithValue(response.error)
      }
      return response.data
    } catch (error) {
      console.error("Error in loginUser thunk:", error)
    }
  }
)

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllPost.pending, (state) => {
      console.log("loading post...")
    })
    builder.addCase(getAllPost.fulfilled, (state, action) => {
      state.joblist = action.payload
    })
    builder.addCase(getAllPost.rejected, (state, action) => {
      console.log("gagal post")
    })
  },
})

export const actions = {
  ...postSlice.actions,
  getAllPost,
}

export default postSlice.reducer
