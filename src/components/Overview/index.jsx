import React from "react";
import styles from "./Overview.module.css";
import OverviewHeader from "./OverviewHeader";
import OverviewNav from "./OverviewNav";
import OverviewCards from "./OverviewCards";

function Overview(props) {
  return (
    <div className={styles.Overview}>
      <OverviewHeader />
      <OverviewNav />
      <OverviewCards />
    </div>
  );
}

export default Overview;
