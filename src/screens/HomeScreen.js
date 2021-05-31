import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import ItemList from "../components/ItemList";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { detailsProduct, listProduct } from "../redux/actions/ProductAction";
import { detailsUser } from "../redux/actions/userAction";

function HomeScreen() {
  const [productId, setProductId] = useState("");

  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.productsList);
  const { loading, error, products } = productsList;

  const carts = useSelector((state) => state.carts);
  const { cartItems } = carts;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const userDetails = useSelector((state) => state.userDetails);
  const { error: userError, user } = userDetails;

  useEffect(() => {
    dispatch(listProduct());
    dispatch(detailsProduct(productId));
    if (userInfo) {
      dispatch(detailsUser(userInfo._id));
    }
  }, [productId, userInfo]);

  return (
    <div className="w-full h-screen bg-gray-50">
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          <Header
            userError={userError}
            user={user}
            cartItems={cartItems}
            userInfo={userInfo}
          />
          <main className="w-full  flex flex-col justify-start items-center space-y-3 pt-3">
            {products.map((product) => (
              <ItemList setProductId={setProductId} product={product} />
            ))}
          </main>
          {cartItems.length > 0 && (
            <footer className="fixed bottom-0 w-full h-12 border-t-2 bg-white flex justify-around items-center text-xl  ">
              <h3 className="text-xl font-bold ">{cartItems.length} Items</h3>
              <p>
                Total: &#x20B9;{" "}
                {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}.00{" "}
              </p>
              <Link
                to="/cart"
                className="bg-lime-500 px-3 py-1 rounded text-white font-bold border hover:border-lime-500 hover:text-lime-500 hover:bg-white"
              >
                View Cart
              </Link>
            </footer>
          )}
        </>
      )}
    </div>
  );
}

export default HomeScreen;
