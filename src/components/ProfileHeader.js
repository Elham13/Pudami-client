import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { siginout } from "../redux/actions/userAction";

function ProfileHeader() {
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(siginout());
  };
  return (
    <nav className="w-full h-14  bg-lime-300 flex justify-between items-center text-gray-900">
      <Link
        to="/customer/profile"
        className="h-14 px-4 flex  justify-center
                 items-center text-lg  bg-lime-300 hover:text-lime-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        Profile
      </Link>
      <Link
        to="/customer/orders"
        className="h-14 px-4 flex  justify-center
                 items-center text-lg  bg-lime-300 hover:text-lime-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
          />
        </svg>
        My Orders
      </Link>
      <span
        onClick={signoutHandler}
        className="h-14 px-2 flex  justify-center
                 items-center text-lg bg-lime-300  hover:text-lime-500"
      >
        <svg
          className="w-6 h-6 mr-2 "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 7a4 4 0 11-8 0 4 4 0 018 0zM9 14a6 6 0 00-6 6v1h12v-1a6 6 0 00-6-6zM21 12h-6"
          />
        </svg>
        Log out
      </span>
    </nav>
  );
}

export default ProfileHeader;
