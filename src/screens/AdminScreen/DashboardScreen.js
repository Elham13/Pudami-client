import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img from "../logo.png";
import DashCreate from "./Products/DashCreate";
import DashCustomer from "./DashCustomer";

import DashHome from "./DashHome";
import DashInvoices from "./Orders/DashInvoices";
import DashOrders from "./Orders/DashOrders";
import DashProduct from "./Products/DashProduct";
import DashUpdate from "./Products/DashUpdate";
import DashOrderUpdate from "./Orders/DashOrderUpdate";
import UpdateCustomer from "./Customer/UpdateCustomer";
import { useDispatch, useSelector } from "react-redux";
import { detailsUser } from "../../redux/actions/userAction";
import AdminRouter from "../../components/AdminRouter";

function DashboardScreen(props) {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const userDetails = useSelector((state) => state.userDetails);
  const { user } = userDetails;
  // if (userInfo.isAdmin === false) {
  //   props.history.push("/");
  // }
  const [nav, setNav] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsUser(userInfo._id));
  }, [userInfo._id]);

  return (
    <div className="w-full bg-white flex flex-col  justify-start items-center">
      <header className="w-full h-14 flex justify-between items-center ">
        <div
          onClick={() => setNav(!nav)}
          className="w-4/12 flex justify-start items-center py-4"
        >
          <svg
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
        <div className="w-4/12 py-1   flex justify-center items-center">
          <Link to="/">
            <img className="w-20" src={img} />
          </Link>
        </div>
        {userInfo && user ? (
          <div className="w-4/12 py-1 mr-2  flex justify-end items-center space-x-1">
            {user.profile.img !== "" ? (
              <img
                class="h-8 w-8  text-lime-500 bg-lime-200  rounded-full "
                src={user.profile.img}
              />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8  text-lime-500 bg-lime-200  rounded-full "
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clip-rule="evenodd"
                />
              </svg>
            )}

            <h3 className="font-bold text-lg md:text-xl">
              {user.profile.firstname + " " + user.profile.lastname}
            </h3>
          </div>
        ) : (
          ""
        )}
      </header>
      <div className="w-full flex  bg-white">
        <nav
          className={
            !nav
              ? " absolute z-50 w-0 md:w-14  bg-white  h-screen  text-lime-500   flex flex-col space-y-7 justify-start items-start px-1  overflow-hidden"
              : "absolute z-50 bg-white w-44 h-screen  text-lime-500   flex flex-col space-y-7 justify-start items-start px-1  overflow-hidden"
          }
          onClick={() => setNav(!nav)}
        >
          <Link to="/admin/dashboard/">
            <div className=" w-44 py-1  flex justify-start items-center space-x-3  hover:bg-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10 ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              <h3 className="text-lg font-bold ">Dashboard</h3>
            </div>
          </Link>
          <Link to="/admin/dashboard/orders">
            <div className=" w-44   py-1  flex justify-start items-center space-x-3  hover:bg-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10 ml-1 "
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              <h3 className="text-lg font-bold ">Orders</h3>
            </div>
          </Link>
          <Link to="/admin/dashboard/invoices">
            <div className=" w-44   py-1  flex justify-start items-center space-x-3  hover:bg-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10 ml-1 "
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                  clip-rule="evenodd"
                />
              </svg>

              <h3 className="text-lg font-bold ">Invoices</h3>
            </div>
          </Link>
          <Link to="/admin/dashboard/products">
            <div className=" w-44  py-1  flex justify-start items-center space-x-3   hover:bg-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10 ml-1 "
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
              </svg>
              <h3 className="text-lg font-bold ">Products</h3>
            </div>
          </Link>
          <Link to="/admin/dashboard/customers">
            <div className="w-44  py-1  flex justify-start items-center space-x-3     hover:bg-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10 ml-1 "
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clip-rule="evenodd"
                />
              </svg>
              <h3 className="text-lg font-bold  px-1 py-1">Customer</h3>
            </div>
          </Link>

          {/* <div className=" w-36 rounded-r-lg py-1  flex justify-start items-center space-x-3    rounded-xl ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10 ml-1 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            <h3 className="text-lg font-bold bg-white px-1 py-1 rounded-xl">
              Logout
            </h3>
          </div> */}
        </nav>
        <>
          <AdminRouter
            path="/admin/dashboard/customers"
            component={DashCustomer}
          />
          <AdminRouter
            path="/admin/dashboard/customer/:id"
            component={UpdateCustomer}
          />
          <AdminRouter path="/admin/dashboard/orders" component={DashOrders} />
          <AdminRouter
            path="/admin/dashboard/products"
            component={DashProduct}
          />
          <AdminRouter
            path="/admin/dashboard/invoices"
            component={DashInvoices}
          />
          <AdminRouter
            path="/admin/dashboard/order/update/:id"
            component={DashOrderUpdate}
          />
          <AdminRouter
            path="/admin/dashboard/product/create"
            component={DashCreate}
          />
          <AdminRouter
            path="/admin/dashboard/product/update/:id"
            component={DashUpdate}
          />
          <AdminRouter path="/admin/dashboard/" exact component={DashHome} />
        </>
      </div>
    </div>
  );
}

export default DashboardScreen;
