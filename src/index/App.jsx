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
import { exchangeFromTo, showCitySelector, hideCitySelector } from "./actions";
function App(props) {
  const {
    from,
    to,
    dispatch,
    isCitySelectorVisible,
    cityData,
    isLoadingCityData
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
        onBack: hideCitySelector
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
        <DepartDate />
        <HighSpeed />
        <Submit />
      </form>
      <CitySelector
        show={isCitySelectorVisible}
        cityData={cityData}
        isLoading={isLoadingCityData}
        {...CitySelectorCbs}
      />
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
