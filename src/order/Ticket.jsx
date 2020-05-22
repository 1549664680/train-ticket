import React, { memo } from "react";
import "./Account.css";
import propTypes, { func } from "prop-types";

const Ticket = memo(function Ticket(props) {
  return <div className="ticket"></div>;
});
Ticket.propTypes = {};
export default Ticket;
