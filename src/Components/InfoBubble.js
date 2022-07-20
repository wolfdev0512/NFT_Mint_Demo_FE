import React from "react";
import { login, logout } from "../utils";

const InfoBubble = (props) => {
  return (
    <button
      style={{ padding: "20px", width: "150px" }}
      onClick={window.walletConnection.isSignedIn() ? logout : login}
    >
      {window.walletConnection.isSignedIn()
        ? window.accountId
        : "Wallet Connect"}
    </button>
  );
};

InfoBubble.propTypes = {};

export default InfoBubble;
