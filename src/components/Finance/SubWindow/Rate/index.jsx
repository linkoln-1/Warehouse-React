import React, { useEffect } from "react";
import HeaderRate from "./HeaderRate";
import styles from "./Rate.module.css";
import NavRate from "./NavRate";
import RateCards from "./RateCards";
import { useDispatch } from "react-redux";
import { LoadAnnualCard, LoadRateCard } from "../../../../redux/actions";

function Rate(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(LoadRateCard());
    dispatch(LoadAnnualCard());
  });
  return (
    <div className={styles.Rate}>
      <HeaderRate />
      <NavRate />
      <RateCards />
    </div>
  );
}

export default Rate;
