import { connect, useSelector } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay({ balance }) {
  // const balance = useSelector(store => store.accountReducer.balance);
  return <div className="balance">{formatCurrency(balance)}</div>;
}
function mapToState(state) {
  return {
    balance: state.accountReducer.balance,
  }
}

export default connect(mapToState)(BalanceDisplay);
