import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const CartContext = createContext();

const CartDataContext = ({ children }) => {
  const [cart, setcartItems] = useState(() => {
    const storedCart = localStorage.getItem("cartData");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const [allproducts, setallProducts] = useState([]);

  const [BillingCart, setBillingcart] = useState([]);

  const [userMangeData, setUserManage] = useState([]);

  // Get Data
  const AllProducts = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/allproducts`);

      setallProducts(res.data);
    } catch (error) {
      console.log(`Error fetching Data: ${error.message}`);
    }
  };

  // Billing Data Read

  const DataReadBilling = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/BillingCustomer`);

      setBillingcart(res.data);
    } catch (error) {
      console.log(`Error Fetching BillingCart Get: ${error.message}`);
    }
  };

  // Billing Data Create

  const CreateBilling = async (createID) => {
    try {
      const res = await axios.post(
        `http://localhost:3000/BillingCustomer`,
        createID
      );

      if (res.status != 201) {
        throw new Error(`Some one Error :${res.status}`);
      }

      // console.log(res);
    } catch (error) {
      console.log(`Error Fetching BillingCart: ${error.message}`);
    }
  };

  // userlogin page

  const UserLogin = async (useremailId) => {
    try {
      const res = await axios.get(
        `http://localhost:3000/users?email=${useremailId}`
      );

      return res;
    } catch (error) {
      console.log(`Error Userlogin Data : ${error.message}`);
    }
  };

  // userRegistrastion page

  const RegistartionPage = async (newData) => {
    try {
      const res = await axios.post(`http://localhost:3000/users`, newData);

      // console.log(res.data);
      return res;
    } catch (error) {
      console.log(`Error regestartion page : ${error.message}`);
    }
  };

  // userProfile Update

  const UserProfileUpdate = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3000/users/${localStorage.getItem("RageuserId")}`
      );

      return res.data;
    } catch (error) {
      console.log(`Error UserProfile Update page : ${error.message}`);
    }
  };

  const UserUpdateData = async (userId, userdataUpdate) => {
    try {
      const res = await axios.patch(
        `http://localhost:3000/users/${userId}`,
        userdataUpdate
      );

      return res;
    } catch (error) {
      console.log(`Error UserProfile  update : ${error.message}`);
    }
  };

  // AdminFruite Add

  const CreateFruiteVeg = async (ulr, payload) => {
    try {
      const res = await axios.post(ulr, payload);

      // console.log(res);

      if (res.status != 201) {
        throw new Error(`Some one Error :${res.status}`);
      }

      // console.log(res);
    } catch (error) {
      console.log(`Error Fetching BillingCart: ${error.message}`);
    }
  };

  // AdminFruite Delete

  const AdminFruitMNGDelete = async (DeteleID) => {
    try {
      const res = await axios.delete(
        `http://localhost:3000/allproducts/${DeteleID}`
      );

      toast.success("Deleted Data Successfull");
      AllProducts();

      // console.log(res.data);
    } catch (error) {
      console.log(`Error Fetching DeleteFruitVeg Admin : ${error.message}`);
    }
  };

  // AdminFruite Update

  const AdminFruitMNGUpdate = async (Url, update) => {
    try {
      const res = await axios.put(Url, update);

      AllProducts();
    } catch (error) {
      console.log(`Error Fetching UpdateFruitVeg Admin : ${error.message}`);
    }
  };

  // AdminLogin Page

  const AdminLogin = async (adminEmailiID) => {
    try {
      const res = await axios.get(
        `http://localhost:3000/admin?email=${adminEmailiID}`
      );

      return res;
      // console.log(res.data);
    } catch (error) {
      console.log(`Error Adminlogin Data : ${error.message}`);
    }
  };

  // userManage

  const UserManage = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/users`);

      // console.log(res.data);
      setUserManage(res.data);
    } catch (error) {
      console.log(`Error UserManage Data: ${error.message}`);
    }
  };

  // userManage Delete

  const UserManageDelete = async (DeleteID) => {
    try {
      const res = await axios.delete(`http://localhost:3000/users/${DeleteID}`);
      toast.success("User deleted successfully.");
      UserManage();
      // console.log(res.data);
    } catch (error) {
      console.log(`Error UserManage Data: ${error.message}`);
    }
  };

  useEffect(() => {
    AllProducts();
    DataReadBilling();
    UserManage();
  }, []);

  const AddTocart = (id) => {
    allproducts.map((product) => {
      if (product.id === id) {
        setcartItems((perveCart) => {
          const updateCart = [...perveCart, product];

          localStorage.setItem("cartData", JSON.stringify(updateCart));

          return updateCart;
        });
      }
    });
  };

  return (
    <CartContext.Provider
      value={{
        allproducts,
        AddTocart,
        cart,
        setcartItems,
        BillingCart,
        DataReadBilling,
        CreateBilling,
        CreateFruiteVeg,
        AdminFruitMNGDelete,
        AdminFruitMNGUpdate,
        AdminLogin,
        UserLogin,
        RegistartionPage,
        UserProfileUpdate,
        UserUpdateData,
        UserManage,
        userMangeData,
        UserManageDelete
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext };
export default CartDataContext;
