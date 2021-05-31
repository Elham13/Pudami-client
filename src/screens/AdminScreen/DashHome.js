import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingBox from "../../components/LoadingBox";
import MessageBox from "../../components/MessageBox";
import { allOrders } from "../../redux/actions/orderAction";
import { allUsers } from "../../redux/actions/userAction";
import moment from "moment";
import { Link } from "react-router-dom";
import Charts from "../../components/Charts";
function DashHome() {
  const ordersAll = useSelector((state) => state.ordersAll);
  const { error, loading, orders } = ordersAll;
  const usersAll = useSelector((state) => state.usersAll);
  const { error: errorU, loading: loadingU, users } = usersAll;

  function someFuction() {
    return orders.reduce(function (sum, order) {
      if (order.status === "delivered") {
        return sum + order.orderItems.reduce((a, c) => a + c.price * c.qty, 0);
      } else {
        return sum;
      }
    }, 0);
  }

  function profilePicture(user) {
    return users.reduce(function (sum, user) {
      if (user._id === user) {
        return user.profile.img;
      } else {
        return sum;
      }
    }, 0);
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allOrders());
    dispatch(allUsers());
  }, []);
  return (
    <div className=" w-full md:ml-10 flex flex-wrap  mx-auto bg-transparent text-coolGray-800 ">
      {loading || loadingU ? (
        <LoadingBox />
      ) : error || errorU ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          <div className="w-full bg-gray-50 grid grid-flow-row lg:grid-flow-col grid-cols-2 md:grid-cols-3 lg:grid-cols-4   text-white">
            <div className="w-full md:w-full  flex justify-between items-center  border">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-16 w-16 md:h-28 md:w-28 text-lime-500 bg-lime-200 p-2 md:p-8 rounded-r-full "
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              <div className="flex flex-col justify-center items-center p-4">
                <p className="text-base md:text-lg text-gray-800 ">
                  Monthly Revenue
                </p>
                <p className="text-lg md:text-2xl font-bold text-gray-800 ">
                  {" "}
                  &#x20B9; {someFuction()}
                </p>
              </div>
            </div>
            <div className="w-full  flex justify-between items-center  border">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-16 w-16 md:h-28 md:w-28 text-lime-500 bg-lime-200 p-2 md:p-8 rounded-r-full "
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                  clip-rule="evenodd"
                />
              </svg>
              <div className="flex flex-col justify-center items-center p-4">
                <p className="text-base md:text-lg text-gray-800 ">
                  New Orders
                </p>
                <p className="text-lg md:text-2xl font-bold text-gray-800 ">
                  {" "}
                  {orders.reduce(function (sum, order) {
                    if (order.status === "ordered") {
                      return sum + 1;
                    } else {
                      return sum;
                    }
                  }, 0)}
                </p>
              </div>
            </div>
            <div className="w-full  flex justify-between items-center  border">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-16 w-16 md:h-28 md:w-28 text-lime-500 bg-lime-200 p-2 md:p-8 rounded-r-full "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div className="flex flex-col justify-center items-center p-4">
                <p className="text-base md:text-lg text-gray-800 ">
                  {" "}
                  Pending Reviews
                </p>
                <p className="text-lg md:text-2xl font-bold text-gray-800 ">
                  {" "}
                  6
                </p>
              </div>
            </div>
            <div className="w-full  flex justify-between items-center  border">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-16 w-16 md:h-28 md:w-28 text-lime-500 bg-lime-200 p-2 md:p-8 rounded-r-full "
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clip-rule="evenodd"
                />
              </svg>

              <div className="flex flex-col justify-center items-center p-4">
                <p className="text-base md:text-lg text-gray-800 ">
                  {" "}
                  New Customers
                </p>
                <p className="text-lg md:text-2xl font-bold text-gray-800 ">
                  {" "}
                  {users.length}
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2  w-full ">
            <div className="w-full flex flex-col">
              <div className="w-full    p-4">
                {/* <img className="w-full h-full border rounded-3xl" src={chart} />
                H */}
                <Charts orders={orders} />
              </div>
              <div className="w-full    p-4 ">
                <div className="w-full h-full  rounded-xl border flex flex-col justify-between items-center">
                  <h3 className=" w-full text-3xl p-2">Pending Orders</h3>
                  <div className="w-full h-96 overflow-hidden flex flex-col justify-start items-center">
                    {orders.map((order) => (
                      <>
                        {order.status === "ordered" && (
                          <div className="w-full flex justify-between items-center p-2">
                            <div className="flex justify-between items-center space-x-3 ">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-12 w-12 ml-2 text-lime-500 bg-lime-200  rounded-full "
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                                  clip-rule="evenodd"
                                />
                              </svg>

                              <div className="flex flex-col justify-start items-start">
                                <span className="text-black">
                                  {moment(order.createAt).format(
                                    "DD/MM/YYYY HH:MM:SS"
                                  )}
                                </span>
                                <span>
                                  by {order.informationAddress.firstName},{" "}
                                  {order.orderItems.length === 1 ? (
                                    <span>One</span>
                                  ) : order.orderItems.length === 2 ? (
                                    <span>Two</span>
                                  ) : order.orderItems.length === 3 ? (
                                    <span>Three</span>
                                  ) : order.orderItems.length === 4 ? (
                                    <span>Four</span>
                                  ) : (
                                    <></>
                                  )}{" "}
                                  item
                                </span>
                              </div>
                            </div>
                            <span className="font-bold">
                              &#x20B9;
                              {order.orderItems.reduce(
                                (a, c) => a + c.price * c.qty,
                                0
                              )}
                              .00
                            </span>
                          </div>
                        )}
                      </>
                    ))}
                  </div>
                  <div className="w-full bg-gray-50 py-1 flex justify-center items-center space-x-3 text-xl font-semibold hover:bg-gray-100 hover:text-purple-500">
                    <h3>
                      <Link to="/admin/dashboard/invoices">All Orders</Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full grid  grid-flow-row grid-cols-1 lg:grid-cols-2">
              <div className="w-full   flex flex-col justify-start items-center">
                <div className="w-full border space-y-1">
                  <div className="w-full bg-gray-50 py-1  flex justify-start items-center space-x-3 text-xl hover:bg-gray-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-12 w-12 ml-2 text-lime-500 bg-lime-200  rounded-full "
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <div className="w-9/12 p-1 py-2 flex flex-col justify-start items-start text-sm ">
                      <div className="flex justify-center items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <p>
                        i like the best now for ever even for all life see now
                        one help so i should be seriuse
                      </p>
                    </div>
                  </div>
                  <div className="w-full bg-gray-50 py-1  flex justify-start items-center space-x-3 text-xl hover:bg-gray-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-12 w-12 ml-2 text-lime-500 bg-lime-200  rounded-full "
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <div className="w-9/12 p-1 py-2 flex flex-col justify-start items-start text-sm ">
                      <div className="flex justify-center items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <p>
                        i like the best now for ever even for all life see now
                        one help so i should be seriuse
                      </p>
                    </div>
                  </div>
                  <div className="w-full bg-gray-50 py-1  flex justify-start items-center space-x-3 text-xl hover:bg-gray-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-12 w-12 ml-2 text-lime-500 bg-lime-200  rounded-full "
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <div className="w-9/12 p-1 py-2 flex flex-col justify-start items-start text-sm ">
                      <div className="flex justify-center items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <p>
                        i like the best now for ever even for all life see now
                        one help so i should be seriuse
                      </p>
                    </div>
                  </div>
                  <div className="w-full bg-gray-50 py-1  flex justify-start items-center space-x-3 text-xl hover:bg-gray-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-12 w-12 ml-2 text-lime-500 bg-lime-200  rounded-full "
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <div className="w-9/12 p-1 py-2 flex flex-col justify-start items-start text-sm ">
                      <div className="flex justify-center items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <p>
                        i like the best now for ever even for all life see now
                        one help so i should be seriuse
                      </p>
                    </div>
                  </div>
                  <div className="w-full bg-gray-50 py-1  flex justify-start items-center space-x-3 text-xl hover:bg-gray-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-12 w-12 ml-2 text-lime-500 bg-lime-200  rounded-full "
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <div className="w-9/12 p-1 py-2 flex flex-col justify-start items-start text-sm ">
                      <div className="flex justify-center items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <p>
                        i like the best now for ever even for all life see now
                        one help so i should be seriuse
                      </p>
                    </div>
                  </div>
                  <div className="w-full bg-gray-50 py-1  flex justify-start items-center space-x-3 text-xl hover:bg-gray-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-12 w-12 ml-2 text-lime-500 bg-lime-200  rounded-full "
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <div className="w-9/12 p-1 py-2 flex flex-col justify-start items-start text-sm ">
                      <div className="flex justify-center items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <p>
                        i like the best now for ever even for all life see now
                        one help so i should be seriuse
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full bg-gray-50 py-1 flex justify-center items-center space-x-3 text-xl font-semibold hover:bg-gray-100 hover:text-purple-500">
                  <h3>All Reviews</h3>
                </div>
              </div>
              <div className="w-full   flex flex-col justify-start items-center">
                {loadingU && <LoadingBox />}
                {errorU && <MessageBox variant="danger">{errorU}</MessageBox>}
                {users && (
                  <div className="w-full border space-y-1">
                    {users.map((user) => (
                      <div
                        key={user._id}
                        className="w-full bg-gray-50 py-1  flex justify-start items-center space-x-3 text-xl hover:bg-gray-100"
                      >
                        {user.profile.img === "" ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-12 w-12 ml-2 text-lime-500 bg-lime-200  rounded-full "
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        ) : (
                          <img
                            className="w-12 h-12 border ml-2 border-lime-400 rounded-full"
                            src={user.profile.img}
                            alt="userImage"
                          />
                        )}
                        <h3>{user.name}</h3>
                      </div>
                    ))}
                  </div>
                )}
                <div className="w-full bg-gray-50 py-1 flex justify-center items-center space-x-3 text-xl font-semibold hover:bg-gray-100 hover:text-purple-500">
                  <h3>
                    <Link to="/admin/dashboard/customers">All Customers</Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default DashHome;
