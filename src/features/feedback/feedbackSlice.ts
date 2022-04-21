import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { feedbackApi } from "../../api";
import type { RootState } from "../../app/store";

export type Rate = {
  id: String;
  categoryId: String;
  rate: Number;
};
type FormDataTypes = Rate[];
type FormDataKeys = string | "rates";
export type FormDataType = { key: FormDataKeys; data: FormDataTypes };
export type FeedbackFormType = {
  [key: FormDataKeys]: FormDataTypes;
};
type StatusType = "idle" | "pending" | "succeeded" | "failed";

interface FeedbackState {
  form: FeedbackFormType;
  status: StatusType;
  error: null;
}

export const sendFeedback = createAsyncThunk(
  "feedback/send",
  async (form: FeedbackFormType) => {
    const response = await feedbackApi.sendFeedback(form);

    return response;
  }
);

const initialState: FeedbackState = {
  form: { rates: [] },
  status: "idle",
  error: null,
};

export const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  reducers: {
    setForm: ({ form }, action: PayloadAction<FormDataType>) => {
      const { data, key } = action.payload;
      form[key] = data;
    },
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(sendFeedback.pending, (state) => {
      state.status = "succeeded";
    });
  },
});

export const { setForm, reset } = feedbackSlice.actions;
export const selectFeedback = (state: RootState) => state.feedback;
export default feedbackSlice.reducer;
