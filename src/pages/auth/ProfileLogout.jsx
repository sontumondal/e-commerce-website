import React, { useEffect, useState } from "react";
import axiosInstance from "./Helper";
import { profile_image } from "./Helper";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/authSlice";
import Swal from "sweetalert2";
const ProfileLogout = () => {
  const [profileData, setProfileData] = useState({});
  const { isLogout } = useSelector((state) => state.authentication);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const res = await axiosInstance.get("/user/profile-details");
      const data = await res.data;
      setProfileData(data.data);
      // console.log(data.data);
    })();
  }, []);
  const handleLogout = () => {
    Swal.fire({
      title: "Do you want to logout now?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Successfuly logoout !", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Continue your Shoping !", "", "info");
      }
    });
    dispatch(logout(localStorage.removeItem("token")));
  };
  const { email, first_name, last_name, profile_pic } = profileData;

  return (
    <>
      <div className="profile-page">
        <img src={profile_image(profile_pic)} alt="" width="15rem" />
        {isLogout ? null : (
          <div className="profile-logout">
            <NavLink to="/" onClick={handleLogout}>
              Logout
            </NavLink>

            <select>
              <option value="firstname">{first_name}</option>
              <option value="email"> {email}</option>
            </select>
          </div>
        )}
      </div>
    </>
  );
};

export default ProfileLogout;
