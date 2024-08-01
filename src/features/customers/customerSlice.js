import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  nationalID: "",
  createdAT: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    createAccount: {
      prepare: function (fullName, nationalID) {
        return {
          payload: {
            fullName,
            nationalID,
            createdAT: new Date().toUTCString(),
          },
        };
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.nationalID = action.payload.nationalID;
        state.createdAT = action.payload.createdAT;
      },
    },
  },
});

export const { createAccount } = customerSlice.actions;
export default customerSlice.reducer;

// export default function customerReducer(state = initialCustomerState, action) {
//   switch (action.type) {
//     case "customer/createAccount":
//       return {
//         ...state,
//         fullName: action.payload.fullName,
//         nationalID: action.payload.nationalID,
//         createdAT: new Date().toUTCString(),
//       };
//     case "customer/updateName":
//       return { ...state, fullName: action.payload.fullName };
//     default:
//       return state;
//   }
// }

// export function createAccount(name, nationalID) {
//   return {
//     type: "customer/createAccount",
//     payload: { fullName: name, nationalID: nationalID },
//   };
// }
// export function updateName(name) {
//   return { type: "customer/updateName", payload: { fullName: name } };
// }
