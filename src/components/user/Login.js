import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "../layouts/Loader";
import MetaData from "../layouts/MetaData";
import { useDispatch, useSelector } from "react-redux";
import { login, clearErrors } from "../../actions/userActions";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isAuthenticated, error, loading } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    }
    if (error) {
      dispatch(clearErrors());
    }
  }, [dispatch, isAuthenticated, error, history]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title={"Login Page"} />
          <div>
            <div
              style={{
                margin: "auto",
                width: "25%",
                marginTop: "5%",
                textAlign: "left",
                padding: "2% 3% 5% 2%",
                boxShadow: " 0px 3px 3px 3px #808000 ",
              }}
            >
              <h2>Login</h2>
              <form onSubmit={submitHandler}>
                <div className="form-group">
                  <label>Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-warning mt-5 mb-2"
                  style={{ width: "100%" }}
                >
                  Submit
                </button>
                <Link
                  to='/register'
                  style={{
                    float: "right",
                    textDecoration: "none",
                    color: "grey",
                  }}
                >
                  new user?
                </Link>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Login;
