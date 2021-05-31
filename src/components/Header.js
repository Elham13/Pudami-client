import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { siginout } from "../redux/actions/userAction";
import LoadingBox from "./LoadingBox";
import MessageBox from "./MessageBox";

function Header(props) {
  const [nav, setNav] = useState(false);
  const { cartItems, userInfo, user, userLoading, userError } = props;

  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(siginout());
  };

  return (
    <>
      <header className="w-full h-16 bg-white flex justify-between items-center overflow-hidden">
        <div className="w-3/12 flex justify-start items-center py-4">
          <svg
            onClick={() => setNav(!nav)}
            className=" w-8 h-8 ml-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <div className="w-6/12 py-1   flex justify-center items-center">
          <Link to="/">
            <img className="w-20" src="./img/logo.png" alt="logo" />
          </Link>
        </div>
        <div className="relative w-3/12 h-16 flex justify-end items-center py-4 space-x-3">
          <Link to="/cart" className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={
                cartItems.length > 0
                  ? "h-8 w-8 text-lime-300"
                  : "w-8 h-8 text-lime-900"
              }
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
            {cartItems.length > 0 && (
              <>
                <span className="absolute animate-ping -top-3 right-1 rounded-full text-xs w-3 h-3 bg-lime-500 text-center"></span>
                <span className="absolute -top-5 right-2 text-red-500">
                  {cartItems.length}
                </span>
              </>
            )}
          </Link>
          <Link to="/signin" onClick={signoutHandler}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={
                userInfo ? "w-8 h-8  text-lime-300" : "w-8 h-8  text-lime-900"
              }
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </header>
      {userLoading ? (
        <LoadingBox />
      ) : userError ? (
        <MessageBox variant="danger">{userError}</MessageBox>
      ) : (
        <nav
          className={
            nav
              ? "bg-gray-50 fixed top-0 left-0 w-6/12 md:w-4/12 h-screen  z-10 flex flex-col justify-between items-center space-y-3"
              : "hidden"
          }
        >
          <div className="w-full p-2 border-b flex justify-between items-center">
            <img className="w-16" src="./img/logo.png" alt="logo" />
            <svg
              onClick={() => setNav(!nav)}
              className="w-9 ml-auto pt-2 "
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className="w-full flex flex-col justify-center items-center space-y-3">
            {user ? (
              <img
                className="rounded-full w-32 h-32 mb-3"
                src={user.profile.img}
                alt="user"
              />
            ) : (
              <svg
                className="rounded-full w-24 h-24 mb-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                />
              </svg>
            )}
            {user ? (
              <h3 className="text-xl font-bold shadow-inner px-3">
                {user.profile.firstname + " " + user.profile.lastname}
              </h3>
            ) : (
              <h3 className="text-xl  font-bold">User Name</h3>
            )}
            <Link
              to="/customer/profile"
              className="bg-lime-500 font-semibold text-white py-1 px-3 rounded capitalize"
            >
              Edit Profile
            </Link>
            <Link
              to="/customer/orders"
              className="w-full pt-4 pl-2  flex justify-between items-center text-xl border-b-2 hover:border-lime-500  hover:text-lime-500"
            >
              <li className="w-full    flex justify-between items-center text-xl border-b-2 hover:border-lime-500  hover:text-lime-500">
                <svg
                  className="w-6 h-8"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
                My Orders{" "}
                <svg
                  className="w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </li>
            </Link>
          </div>
          <li className="w-full  pl-2  flex justify-between items-center text-xl border-b-2 hover:border-lime-500  hover:text-lime-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
            Products{" "}
            <svg
              className="w-4"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </li>
          <li className="w-full  pl-2  flex justify-between items-center text-xl border-b-2 hover:border-lime-500  hover:text-lime-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              />
            </svg>
            Privacy{" "}
            <svg
              className="w-4"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </li>
          <li className="w-full pl-2 flex justify-between items-center text-xl border-b-2 hover:border-lime-500  hover:text-lime-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
            Terms{" "}
            <svg
              className="w-4"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </li>

          <div className="w-full pl-2 flex justify-between items-center text-xl border-b-2 hover:border-lime-500  hover:text-lime-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
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
            <Link to="/" onClick={signoutHandler}>
              Logout
            </Link>
            <svg
              className="w-4"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </nav>
      )}
      {/* )}  */}
    </>
  );
}

export default Header;
