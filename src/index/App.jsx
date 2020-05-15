import React, { useCallback, useMemo } from "react";
import { connect } from "react-redux";
import "./App.css";
import { bindActionCreators } from "redux";
import Header from "../common/Header.jsx";
import DepartDate from "./DepartDate.jsx";
import Journey from "./Journey.jsx";
import HighSpeed from "./HighSpeed.jsx";
import Submit from "./Submit.jsx";
import CitySelector from "../common/CitySelector.jsx";
import DateSelecotr from "../common/DateSelector.jsx";
import {
  exchangeFromTo,
  showCitySelector,
  hideCitySelector,
  hideDateSelector,
  fetchCityData,
  setSelectedCity,
  showDateSelector
} from "./actions";
function App(props) {
  const {
    from,
    to,
    dispatch,
    isCitySelectorVisible,
    isDateSelectorVisible,
    isLoadingCityData,
    departDate,
    cityData
  } = props;
  const onBack = useCallback(() => {
    window.history.back();
  }, []);
  const cbs = useMemo(() => {
    return bindActionCreators(
      {
        exchangeFromTo,
        showCitySelector
      },
      dispatch
    );
  }, []);
  const CitySelectorCbs = useMemo(() => {
    return bindActionCreators(
      {
        onBack: hideCitySelector,
        fetchCityData,
        onSelect: setSelectedCity
      },
      dispatch
    );
  }, []);
  const departDateCbs = useMemo(() => {
    return bindActionCreators(
      {
        onClick: showDateSelector
      },
      dispatch
    );
  }, []);
  const dateSelectorCbs = useMemo(() => {
    return bindActionCreators(
      {
        onBack: hideDateSelector
      },
      dispatch
    );
  }, []);
  return (
    <div>
      <div className="header-wrapper">
        <Header title="火车票" onBack={onBack} />
      </div>
      <form className="form">
        <Journey from={from} to={to} {...cbs} />
        <DepartDate time={departDate} {...departDateCbs} />
        <HighSpeed />
        <Submit />
      </form>
      <CitySelector
        show={isCitySelectorVisible}
        cityData={cityData}
        isLoading={isLoadingCityData}
        {...CitySelectorCbs}
      />
      <DateSelecotr show={isDateSelectorVisible} {...dateSelectorCbs} />
    </div>
  );
}
export default connect(
  function mapStateToProps(state) {
    return state;
  },
  function mapDispatchToProps(dispatch) {
    return { dispatch };
  }
)(App);
