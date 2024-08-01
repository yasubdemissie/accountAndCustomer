const initialCustomerState = {
  fullName: "",
  nationalID: "",
  createdAT: "",
};

export default function customerReducer(state = initialCustomerState, action) {
  switch (action.type) {
    case "customer/createAccount":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAT: new Date().toUTCString(),
      };
    case "customer/updateName":
      return { ...state, fullName: action.payload.fullName };
    default:
      return state;
  }
}

export function createAccount(name, nationalID) {
  return {
    type: "customer/createAccount",
    payload: { fullName: name, nationalID: nationalID },
  };
}
export function updateName(name) {
  return { type: "customer/updateName", payload: { fullName: name } };
}
