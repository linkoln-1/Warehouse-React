import React from "react";
import styles from "./ProductIsInStock.module.css";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import Redactive from "./Readctive";

let prev = 0;
let next = 0;
let last = 0;

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.product.data.productsInfoList,
      currentPage: 1,
      productPerPage: 10,
      isActive:true
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleLastClick = this.handleLastClick.bind(this);
    this.handleFirstClick = this.handleFirstClick.bind(this);
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleClick(event) {
    event.preventDefault();
    this.setState({
      currentPage: Number(event.target.id),
    });
  }
  handleLastClick(event) {
    event.preventDefault();
    this.setState({
      currentPage: last,
    });
  }
  handleFirstClick(event) {
    event.preventDefault();
    this.setState({
      currentPage: 1,
    });
  }
  handleAdd(event){
    event.preventDefault();
    this.setState({
      isActive: !this.state.isActive
    })
  }

  render() {
    const { product, currentPage, productPerPage } = this.state;

    // Logic for displaying todos
    const indexOfLastProduct = currentPage * productPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productPerPage;
    const currentProduct = product.slice(
      indexOfFirstProduct,
      indexOfLastProduct
    );
    prev = currentPage > 0 ? currentPage - 1 : 0;
    last = Math.ceil(product.length / productPerPage);
    next = last === currentPage ? currentPage : currentPage + 1;

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(product.length / productPerPage); i++) {
      pageNumbers.push(i);
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
              <div className={styles.InStockProducts} onClick={this.handleAdd}>
                {product.currentStock}
              </div>
              {this.state.isActive ? "" : <Redactive product={product} />}
              <div className={styles.inWarehouseProduct}>
                {product.currentStockOnWarehouse}
              </div>
            </div>
          );
        })}
        <Pagination size="sm" style={{ marginLeft: 200 }}>
          <PaginationItem>
            {prev === 0 ? (
              <PaginationLink disabled>Назад</PaginationLink>
            ) : (
              <PaginationLink onClick={this.handleClick} id={prev} href={prev}>
                Назад
              </PaginationLink>
            )}
          </PaginationItem>
          {pageNumbers.map((number, i) => (
            <Pagination key={i}>
              <PaginationItem active={pageNumbers[currentPage - 1] === number}>
                <PaginationLink
                  onClick={this.handleClick}
                  href={number}
                  key={number}
                  id={number}
                >
                  {number}
                </PaginationLink>
              </PaginationItem>
            </Pagination>
          ))}

          <PaginationItem>
            {currentPage === last ? (
              <PaginationLink disabled>Вперед</PaginationLink>
            ) : (
              <PaginationLink
                onClick={this.handleClick}
                id={pageNumbers[currentPage]}
                href={pageNumbers[currentPage]}
              >
                Вперед
              </PaginationLink>
            )}
          </PaginationItem>
        </Pagination>
      </div>
    );
  }
}
export default Product;
