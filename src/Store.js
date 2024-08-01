import { combineReducers, createStore } from "redux";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";


const rootReducer = combineReducers({accountReducer, customerReducer});

const store = createStore(rootReducer);
// store.dispatch({ type: "account/deposit", payload: 500 });
// store.dispatch({ type: "account/withdraw", payload: 300 });
// store.dispatch({
//   type: "account/requestLoan",
//   payload: { amount: 1000, purpose: "To rent a hotel" },
// });
// store.dispatch({ type: "account/payLoan" });
// store.dispatch({
//   type: "account/requestLoan",
//   payload: { amount: 600, purpose: "To rent a car" },
// });
// store.dispatch({ type: "account/deposit", payload: 500 });
// store.dispatch({ type: "account/withdraw", payload: 500 });
// store.dispatch({ type: "account/payLoan" });

export default store;
