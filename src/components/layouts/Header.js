import React from "react";
import Search from "../layouts/Search";
import { Route, Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="Navigation">
        <div
          className="row p-2"
          style={{ border: "1px solid black", backgroundColor: "#343a40" }}
        >
          <div className="col-md-2">
            {/* <img
              src="/images/logo.png"
              alt="MartaCart Logo"
              style={{
                float: "left",
                height: "50px",
                marginLeft: "30px",
              }}
            /> */}
            <h1 style={{ color: "#f8f9fa" }}>MartaCart</h1>
          </div>
          <div className="col-md-4 offset-md-2">
            <Route render={({ history }) => <Search history={history} />} />
          </div>
          <div className="col-md-3 offset-md-1">
            {/* <Link to="/login" className="btn btn-warning mt-2">
              Login
            </Link> */}
            <a href="/cart" className="btn btn-warning mt-2 ml-3">
              Cart{" "}
              <span
                style={{
                  border: "1px solid black",
                  padding: "0 2px 0 2px",
                  backgroundColor: "#dc3545",
                }}
              >
                {sessionStorage.getItem('cart') || 0}
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
