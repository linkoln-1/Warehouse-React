import React from "react";
import styles from "./ProductIsInStock.module.css";
import Redactive from "./Readctive";
import $ from "jquery";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.product.data.productsInfoList,
      currentPage: 1,
      productPerPage: 10,
      isActive: true,
      upperPageBound: 5,
      lowerPageBound: 0,
      isPrevBtnActive: "disabled",
      isNextBtnActive: "",
      pageBound: 3,
      currentInStock: "",
      warehouseExternalId:"",
      offerId:""
    };
    this.handleClick = this.handleClick.bind(this);
    this.btnDecrementClick = this.btnDecrementClick.bind(this);
    this.btnIncrementClick = this.btnIncrementClick.bind(this);
    this.btnNextClick = this.btnNextClick.bind(this);
    this.btnPrevClick = this.btnPrevClick.bind(this);
    // this.componentDidMount = this.componentDidMount.bind(this);
    this.setPrevAndNextBtnClass = this.setPrevAndNextBtnClass.bind(this);
  }

  //доработка идет, коммент для меня
  handleAdd(product, warehouseExternalId, offerId) {
    this.setState({
      isActive: !this.state.isActive,
      currentInStock: product,
      warehouseExternalId:warehouseExternalId,
      offerId:offerId
    });
  }


  //Идет проверка на работоспособность
  handleSelectProductsPerPage = (e) => {
    const selectedIndex = e.target.options.selectedIndex;

    this.setState({
      productPerPage: e.target.options[selectedIndex].value
    });
  };


  handleOnchange = (e) => {
    this.setState({
      currentInStock: e.target.value,
    });
  };

  componentDidUpdate() {
    $("ul li.active").removeClass("active");
    $("ul li#" + this.state.currentPage).addClass("active");
  }
  handleClick(event) {
    let listid = Number(event.target.id);
    this.setState({
      currentPage: listid,
    });
    $("ul li.active").removeClass("active");
    $("ul li#" + listid).addClass("active");
    this.setPrevAndNextBtnClass(listid);
  }
  setPrevAndNextBtnClass(listid) {
    let totalPage = Math.ceil(
      this.state.product.length / this.state.currentPage
    );
    this.setState({ isNextBtnActive: "disabled" });
    this.setState({ isPrevBtnActive: "disabled" });
    if (totalPage === listid && totalPage > 1) {
      this.setState({ isPrevBtnActive: "" });
    } else if (listid === 1 && totalPage > 1) {
      this.setState({ isNextBtnActive: "" });
    } else if (totalPage > 1) {
      this.setState({ isNextBtnActive: "" });
      this.setState({ isPrevBtnActive: "" });
    }
  }
  btnIncrementClick() {
    this.setState({
      upperPageBound: this.state.upperPageBound + this.state.pageBound,
    });
    this.setState({
      lowerPageBound: this.state.lowerPageBound + this.state.pageBound,
    });
    let listid = this.state.upperPageBound + 1;
    this.setState({ currentPage: listid });
    this.setPrevAndNextBtnClass(listid);
  }
  btnDecrementClick() {
    this.setState({
      upperPageBound: this.state.upperPageBound - this.state.pageBound,
    });
    this.setState({
      lowerPageBound: this.state.lowerPageBound - this.state.pageBound,
    });
    let listid = this.state.upperPageBound - this.state.pageBound;
    this.setState({ currentPage: listid });
    this.setPrevAndNextBtnClass(listid);
  }
  btnPrevClick() {
    if ((this.state.currentPage - 1) % this.state.pageBound === 0) {
      this.setState({
        upperPageBound: this.state.upperPageBound - this.state.pageBound,
      });
      this.setState({
        lowerPageBound: this.state.lowerPageBound - this.state.pageBound,
      });
    }
    let listid = this.state.currentPage - 1;
    this.setState({ currentPage: listid });
    this.setPrevAndNextBtnClass(listid);
  }
  btnNextClick() {
    if (this.state.currentPage + 1 > this.state.upperPageBound) {
      this.setState({
        upperPageBound: this.state.upperPageBound + this.state.pageBound,
      });
      this.setState({
        lowerPageBound: this.state.lowerPageBound + this.state.pageBound,
      });
    }
    let listid = this.state.currentPage + 1;
    this.setState({ currentPage: listid });
    this.setPrevAndNextBtnClass(listid);
  }


  render() {
    const {
      product,
      currentInStock,
      currentPage,
      productPerPage,
      upperPageBound,
      lowerPageBound,
      isPrevBtnActive,
      isNextBtnActive,
      offerId,
      warehouseExternalId
    } = this.state;
    // Logic for displaying current todos
    const indexOfLastTodo = currentPage * productPerPage;
    const indexOfFirstTodo = indexOfLastTodo - productPerPage;
    const currentProduct = product.slice(indexOfFirstTodo, indexOfLastTodo);

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(product.length / productPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map((number) => {
      if (number === 1 && currentPage === 1) {
        return (
          <li key={number} className="active" id={number}>
            <a href="#" id={number} onClick={this.handleClick}>
              {number}
            </a>
          </li>
        );
      } else if (number < upperPageBound + 1 && number > lowerPageBound) {
        return (
          <li key={number} id={number}>
            <a href="#" id={number} onClick={this.handleClick}>
              {number}
            </a>
          </li>
        );
      }
    });
    let pageIncrementBtn = null;
    if (pageNumbers.length > upperPageBound) {
      pageIncrementBtn = (
        <li className="">
          <a href="#" onClick={this.btnIncrementClick}>
            {" "}
            &hellip;{" "}
          </a>
        </li>
      );
    }
    let pageDecrementBtn = null;
    if (lowerPageBound >= 1) {
      pageDecrementBtn = (
        <li className="">
          <a href="#" onClick={this.btnDecrementClick}>
            {" "}
            &hellip;{" "}
          </a>
        </li>
      );
    }
    let renderPrevBtn = null;
    if (isPrevBtnActive === "disabled") {
      renderPrevBtn = (
        <li className={isPrevBtnActive}>
          <span className="btnPrev" id="btnPrev">
            {" "}
            Назад{" "}
          </span>
        </li>
      );
    } else {
      renderPrevBtn = (
        <li className={isPrevBtnActive}>
          <a
            href="#"
            className="btnPrev"
            id="btnPrev"
            onClick={this.btnPrevClick}
          >
            {" "}
            Назад{" "}
          </a>
        </li>
      );
    }
    let renderNextBtn = null;
    if (isNextBtnActive === "disabled") {
      renderNextBtn = (
        <li className={isNextBtnActive}>
          <span className="btnNext" id="btnNext"> Вперед </span>
        </li>
      );
    } else {
      renderNextBtn = (
        <li className={isNextBtnActive}>
          <a href="#" className="btnNext" id="btnNext" onClick={this.btnNextClick}>
            {" "}
            Вперед{" "}
          </a>
        </li>
      );
    }

    return (
      <div>
        {currentProduct.map((product, index) => {
          return (
            <div className={styles.InStockProduct} key={index}>
              <div className={styles.ArtikulProduct}>{product.offerId}</div>
              <div className={styles.PhotosProduct}>Фото</div>
              <div className={styles.BarcodeProduct}>{product.barcode}</div>
              <div className={styles.NameProduct}>{product.name}</div>
              <div className={styles.PriceProduct}>{product.price}₽</div>
              <div
                className={styles.InStockProducts}
                onClick={() => this.handleAdd(product.currentStock, product.offerId,product.warehouseExternalId)}
              >
                <p> {product.currentStock}</p>
              </div>
              <div className={styles.inWarehouseProduct}>
                <p>{product.currentStockOnWarehouse}</p>
              </div>
            </div>
          );
        })}
        {this.state.isActive ? (
          ""
        ) : (
          <Redactive
            currentStock={currentInStock}
            offerId={offerId}
            warehouseExternalId={warehouseExternalId}
            handle={this.handleOnchange}
          />
        )}
        <div className="footer-with-pagination">
          <div>
            Кол-во строк:
            <select
              className='select_productsPerPage'
              onChange={this.handleSelectProductsPerPage}
              value={this.state.productPerPage}
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={30}>30</option>
            </select>
          </div>
          <ul id="page-numbers" className="pagination">
            {renderPrevBtn}
            {/*{pageDecrementBtn}*/}
            {renderPageNumbers}
            {pageIncrementBtn}
            {renderNextBtn}
          </ul>
          <div>
            {this.state.productPerPage * (this.state.currentPage - 1)}-
            {this.state.productPerPage * this.state.currentPage} из {this.state.product.length}
          </div>
        </div>
      </div>
    );
  }
}
export default Product;
