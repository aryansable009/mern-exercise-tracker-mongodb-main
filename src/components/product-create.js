//import React, { useState, useEffect } from "react";
//what is useEffect? - it is a hook that runs after the component is rendered
//what is useState? - it is a hook that runs before the component is rendered

import React, { useState } from "react";
//import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
//what is axios? - it is a library that allows us to make requests to a server

//this is the constructor- assiging objects to the state
//product
//what is setProduct? - it is a function that takes in an object and sets the state to that object

const CreateProduct = () => {
  const [Product, setProduct] = useState({
    skuid: "",
    product: "",
    origin: "",
    price: 0,
    uom: "",
    isActive: true,
    datetime: new Date(),

    /*username: "helllo",
    description: "",
    duration: 0,
    date: new Date(),
 */
  });
  //user is not being used
  //const [Users, setUsers] = useState([]);

  const onSubmit = () => {
    axios.post("http://localhost:5000/products/add", Product);
  };
  //user is not being used in this form. We will use in StoreOrder
  /*   useEffect(() => {
    axios.get("http://localhost:5000/users").then((res) => {
      res.data.map((user) => {
        
        what is setUsers? - it is a function that takes in an array and sets the state to that array
        what is oldArray? - it is the old state
        what is ...oldArray? - it is the old state
        what is [...oldArray, user.username]? - it is the old state plus the new user
        
        why is it returning 0? - it is returning 0 so that it will not break the code
      
        setUsers((oldArray) => [...oldArray, user.username]);
        return 0;
      });
    });
  }, []);
 */
  return (
    <div>
      <h3>Add New Product </h3>
      <form onSubmit={onSubmit}>
        {/*  <div className="form-group">
          <label>Username: </label>
          <select
            required
            className="form-control"
            value={Product.username}
            
            what is onChange? - it is a function that takes in an event and sets the state to that event
            what is e.target.value? - it is the value of the event

            onChange={(e) =>
              setProduct({ ...Product, username: e.target.value })
            }
          >
          what is Users.map? - it is a function that takes in a function and returns a new array
          what is user? - it is the current user
            {Users.map(function (user) {
              return (
                <option key={user} value={user}>
                  {user}
                </option>
              );
            })}
          </select>
        </div>
 */}
        <div className="form-group">
          <label>Skuid: </label>
          <input
            type="text"
            required
            className="form-control"
            value={Product.skuid}
            onChange={(e) => setProduct({ ...Product, skuid: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Product: </label>
          <input
            type="text"
            required
            className="form-control"
            value={Product.product}
            onChange={(e) =>
              setProduct({ ...Product, product: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label>Origin: </label>
          <input
            type="text"
            required
            className="form-control"
            value={Product.origin}
            onChange={(e) => setProduct({ ...Product, origin: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Price (in numbers): </label>
          <input
            type="text"
            className="form-control"
            value={Product.price}
            onChange={(e) => setProduct({ ...Product, price: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>UOM (Palletes): </label>
          <input
            type="text"
            className="form-control"
            value={Product.uom}
            onChange={(e) => setProduct({ ...Product, uom: e.target.value })}
          />
        </div>

        {/* <div className="form-group">
          <label>isActive: true</label>
          <input
            type="hidden"
            className="form-control"
            value={(Product.isActive = true)}
          />
        </div> */}
        <div className="form-group">
          {/* <label>datetime: {new Date()}</label> */}
          {/* how to create a date at runtime */}
          <label>datetime: will be added at the time of creation</label>

          <input
            type="hidden"
            className="form-control"
            value={(Product.datetime = new Date())}
          />
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Add Product"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};
export default CreateProduct;
