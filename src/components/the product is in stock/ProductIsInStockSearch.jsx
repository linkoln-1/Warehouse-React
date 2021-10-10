import React, {useState} from 'react';
import search from "../../images/Vector.svg";
import styles from "./ProductIsInStock.module.css";

function ProductIsInStockSearch(props) {
 const [text, setText] = useState("");
 return (
   <div>
    <div className={`col-3 g-0 ${styles.Search}`}>
     <div className={styles.SearchIcon}>
      <img src={search} alt="" />
     </div>
     <input
       value={text}
       onChange={(e) => setText(e.target.value)}
       className="form-control input"
       placeholder={"Поиск по артикулу или названию"}
       type="text"
     />
    </div>
   </div>
 );
}

export default ProductIsInStockSearch;
