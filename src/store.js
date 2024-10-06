import { createSlice, configureStore } from "@reduxjs/toolkit";
const covidSlice = createSlice({
  name: "covid",
  initialState: {
    data: [],
    filteredData: [],
    loading: false,
    filteredState: null, // currently selected state for filtering
  },
  reducers: {
    setdata: (state, action) => {
      state.data = action.payload;
      state.filteredData = action.payload;
    },
    setloading: (state, action) => {
      state.loading = action.payload;
    },

    setFilteredState: (state, action) => {
      state.filteredState = action.payload;

      if (action.payload) {
        state.filteredData = state.data.filter(
          (item) => item.state === action.payload
        );
      } else {
        state.filteredData = state.data;
      }
    },
  },
});
export const {setdata, setFilteredState, setloading } = covidSlice.actions;
//create redux store
export const store = configureStore({
  reducer: {
    covid: covidSlice.reducer,
  },
});
