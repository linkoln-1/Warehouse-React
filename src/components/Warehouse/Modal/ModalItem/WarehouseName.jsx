import React from 'react';

function WarehouseName(props) {
 return (
   <>
    <div>
     <div className="row mt-3 flex-column">
      <div className="col-2 mb-2">Название</div>
      <div className="col-12">
       <input className="form-control" type="text" />
      </div>
     </div>

     <div className="row mt-3">
      <div className="col-4">
       <p>Контактные данные</p>
      </div>
      <div className="d-flex justify-content-between">
       <div className="col-5">
        <p>Регион</p>
        <input className="form-control" type="text" />
       </div>
       <div className="col-5">
        <p>Город</p>
        <input className="form-control" type="text" />
       </div>
      </div>
     </div>

     <div className="row mt-3">
      <div className="col-5">
       <p>Улица</p>
       <input className="form-control" type="text" />
      </div>
      <div className="col-2">
       <p>Индекс</p>
       <input className="form-control" type="text" />
      </div>
      <div className="col-2">
       <p>Дом</p>
       <input className="form-control" type="text" />
      </div>
      <div className="col-2">
       <p>Корпус</p>
       <input className="form-control" type="text" />
      </div>
     </div>

     <div className="row mt-3 flex-column">
      <div className="col-2 mb-2">Телефон</div>
      <div className="col-12">
       <input className="form-control" type="text" />
      </div>
     </div>
    </div>
   </>
 );
}

export default WarehouseName;
