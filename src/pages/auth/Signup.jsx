import React, { useState, memo } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axiosInstance from "./Helper";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import Swal from "sweetalert2";

const Signup = () => {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const [isPassword, setIsPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [img, setImg] = useState();
  const [error, setError] = useState({});
  const validation = () => {
    let error = {};
    if (!user.email) {
      error.email = "Email is Required";
    }
    if (!user.password) {
      error.password = "Password is Required";
    }
    if (!user.first_name) {
      error.first_name = "First-Name is Required";
    }
    if (!user.last_name) {
      error.last_name = "Last-Name is Required";
    }
    return error;
  };

  const handleOnchangeData = (e) => {
    const { name, value } = e.target;

    // console.log(value,name);
    if (name === "email") {
      if (value.length === 0) {
        setError({ ...error, email: "Email is Required" });
        setUser({ ...user, email: "" });
      } else {
        setUser({ ...user, email: value });
        setError({ ...error, email: "" });
      }
    }
    if (name === "password") {
      if (value.length === 0) {
        setError({ ...error, password: "Password is Required" });
        setUser({ ...user, password: "" });
      } else {
        setUser({ ...user, password: value });
        setError({ ...error, password: "" });
      }
    }
    if (name === "first_name") {
      if (value.length === 0) {
        setError({ ...error, first_name: "First name is Required" });
        setUser({ ...user, first_name: "" });
      } else {
        setUser({ ...user, first_name: value });
        setError({ ...error, first_name: "" });
      }
    }
    if (name === "last_name") {
      if (value.length === 0) {
        setError({ ...error, last_name: "Last name is Required" });
        setUser({ ...user, last_name: "" });
      } else {
        setUser({ ...user, last_name: value });
        setError({ ...error, last_name: "" });
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(validation());
    const formdata = new FormData();
    formdata.append("email", user.email);
    formdata.append("password", user.password);
    formdata.append("first_name", user.first_name);
    formdata.append("last_name", user.last_name);
    formdata.append("profile_pic", img);
    try {
      setIsLoading(true);
      const response = await axiosInstance.post(
        "/user/signup",

        formdata,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      const token = response.data.token;
      localStorage.setItem("token", token);
      //  console.log(response,"response")
      // console.log(token)
      setIsLoading(false);
      if (token) {
        navigate("/");
        Swal.fire({
          title: "Account created Sucessfully",
          showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `,
          },
          hideClass: {
            popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `,
          },
        });
      } else {
        alert("sign-up is not completed please try again");
      }
      // console.log(response.data);
    } catch (error) {
      throw error;
    }
  };
  return (
    <>
      <div className="signup">
        <div className="signup-form">
          <label>Sign-Up</label>
          <input
            type="text"
            placeholder="Enter your firstname"
            value={user.first_name}
            onChange={handleOnchangeData}
            name="first_name"
          />
          <span style={{ color: "red", padding: "0.5rem", fontSize: "0.9rem" }}>
            {error.first_name}
          </span>
          <input
            type="text"
            placeholder="Enter your lastname"
            value={user.last_name}
            onChange={handleOnchangeData}
            name="last_name"
          />
          <span style={{ color: "red", padding: "0.5rem", fontSize: "0.9rem" }}>
            {error.last_name}
          </span>

          <input
            type="email"
            placeholder="Enter your userid as Email"
            value={user.email}
            onChange={handleOnchangeData}
            name="email"
          />
          <span style={{ color: "red", padding: "0.5rem", fontSize: "0.9rem" }}>
            {error.email}
          </span>

          <div className="login-password">
            <input
              type={isPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={user.password}
              onChange={handleOnchangeData}
              name="password"
            />

            <span
              className="password-toggle"
              onClick={() => setIsPassword((prev) => !prev)}
            >
              {isPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
            </span>
          </div>

          <span style={{ color: "red", padding: "0.5rem", fontSize: "0.9rem" }}>
            {error.password}
          </span>
          <span style={{ color: "yellowgreen", margin: "0" }}>
            Choose your profile-pic
          </span>
          <input
            type="file"
            onChange={(e) => setImg(e.target.files[0])}
            name="img"
            accept="image/*"
          />
          {img !== "" && img !== undefined && img !== null ? (
            <img
              style={{ height: "8rem", width: "50%", borderRadius: "30%" }}
              src={URL.createObjectURL(img)}
              alt=""
              className="upload-img"
            />
          ) : (
            <>{img === "" && <p>Drag or drop content here</p>}</>
          )}
          {isLoading ? (
            <p style={{ color: "white" }}>Account is creating ! please wait...</p>
          ) : (
            <button onClick={handleSubmit}>sign up</button>
          )}

          <p>
            Already have an account :<NavLink to="/">Sign-In</NavLink>
          </p>
        </div>
      </div>
    </>
  );
};

export default memo(Signup);
