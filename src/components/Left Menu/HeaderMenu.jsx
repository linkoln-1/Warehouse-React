import React from "react";
import styles from "./MenuStyle.module.css";

function HeaderMenu(props) {
  return (
    <div>
      <div className={styles.MenuDisplayFlex}>
        <img
          className={styles.img}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1htAf5FskKszUw9WnNmoszxdQesLZ48gqsA&usqp=CAU"
          alt="avatar"
        />
        <div className={styles.MenuHeaderText}>
          <span>hello@lk.market</span>
          <p>Тариф: Малый бизнес</p>
        </div>
      </div>
    </div>
  );
}

export default HeaderMenu;
