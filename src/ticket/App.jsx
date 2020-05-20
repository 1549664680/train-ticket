import { connect } from "react-redux";
import React from "react";
import "./App.css";
import Detail from "../common/Detail.jsx";
import Candidate from "./Candidate.jsx";
import Schedule from "./Schedule.jsx";
function App(props) {
  const {
    departDate,
    arriveDate,
    departTimeStr,
    arriveTimeStr,
    departStation,
    arriveStation,
    trainNumber,
    durationStr,
    tickets,
    isScheduleVisible,
    searchParsed,

    dispatch
  } = props;
  return (
    <div className="app">
      <Detail />
      <Candidate />
      <Schedule />
    </div>
  );
}
export default connect(
  function mapStateToProps(state) {
    return state;
  },
  function mapDispatchToProps(dispatch) {
    return { dispatch }; //允许props中直接获取dispatch
  }
)(App);
