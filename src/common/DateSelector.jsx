import React from "react";
import "./DateSelector.css";
import PropTypes from "prop-types";
import classnames from "classnames";
import Header from "./Header.jsx";
export default function DateSelecotr(props) {
  const { show, onSelect, onBack } = props;
  return (
    <div className={classnames("date-selector", { hidden: !show })}>
      <Header title="日期选择" onBack={onBack} />
      <div className="date-selector-tables"></div>
    </div>
  );
}
DateSelecotr.propTypes = {
  show: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired
};
