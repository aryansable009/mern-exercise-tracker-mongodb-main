import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Grace OrderTracker
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/*   <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Exercises List
              </Link>
            </li> */}

            {/* <li className="nav-item">
              <Link className="nav-link" to="/create">
                Create Exercise Log
              </Link>
            </li> */}
            {/* added users list by Arun */}

            <li className="nav-item">
              <Link className="nav-link" to="/userlist">
                UsersList
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/user">
                CreateUser
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/productslist">
                ProductsList
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/productcreate">
                AddProduct
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/storeordercreate">
                AddStoreOrder
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/storeordercreate">
                StoreOrderList
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
