import React from 'react';
import styles from "./ProductIsInStock.module.css";

function Readctive(props) {
 return (
   <div className={styles.ModalStock}>
    <div>
     <h1>На моем складе</h1>
    </div>
    <div>
     <div>
      <span>Доступно:</span>
     </div>
     <input
       value={props.product.currentStock}
       type="text"/>
    </div>

    <div>
     <div>
      <span>
       зарезервировано:
      </span>
     </div>
     <p>40</p>
    </div>
    <hr/>

    <div>
     <div>
      <p>всего товаров:</p>
     </div>

     <div>
      <span>
       200
      </span>
     </div>


    </div>





   </div>
 );
}

export default Readctive;
