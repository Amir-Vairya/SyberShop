import { Link } from "react-router-dom";
import Conteiner from "../Conteiner/Conteiner";
import Button from "../botton/Botton";
import { useShoppingCartContext } from "../../context/ShopingCartContext";
import LoginPage from "../../Pages/login/LoginPage";

function Navbar() {
  const { CartQty } = useShoppingCartContext();
  return (
    <div className=" h-14 shadow-gray-400 shadow flex items-center text-lg">
      <Conteiner>
        <div className="flex justify-between flex-row-reverse items-center">
          <ul className="flex  flex-row-reverse">
            <li className="   p-3 hover:bg-gray-300 text-2xl">
              <Link to="/">خانه</Link>
            </li>
            <li className=" p-3 hover:bg-gray-300 text-2xl">
              <Link to="/Store">فروشگاه</Link>
            </li>
          </ul>
          <div className="flex justify-center items-center gap-3 flex-row-reverse">
            <Button>
              <Link to={"/ShopCart"}>
                <div className="flex justify-center items-cente relative">
                  <img
                    className="h-10 "
                    src="https://cdn-icons-png.flaticon.com/512/1413/1413908.png"
                    alt=""
                  />
                  {CartQty !== 0 ? (
                    <span className="left-7 top-1 bg-white absolute border w-7 border-slate-700 mt-3 rounded-full">
                      {CartQty !== 0 ? CartQty : ""}
                    </span>
                  ) : (
                    ""
                  )}
                </div>
              </Link>
            </Button>
            <Link to={"/login"}>
              <Button variant="primery">ورود|ثبت نام</Button>
            </Link>
          </div>
        </div>
      </Conteiner>
    </div>
  );
}

export default Navbar;
