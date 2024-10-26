import Button from "../botton/Botton";

import { getProduct } from "../../services/api";
import { useEffect, useState } from "react";
import { productsTypes } from "../../assets/types/serversType";
import { useShoppingCartContext } from "../../context/ShopingCartContext";

interface ICartItem {
  id: number;
  qty: number;
}

function CartItem({ id, qty }: ICartItem) {
  const [product, setProduct] = useState<productsTypes>();

  const {handleIncreseProductQty,handleRemoveProduct,hanleDecProductQty} = useShoppingCartContext();

  useEffect(() => {
    getProduct(id).then((data) => {
      setProduct(data);
    });
  }, []);
  const totalPrice: number = qty * product?.price;
  return (
    <div className="mt-4 flex flex-row-reverse justify-between items-center shadow-gray-400 shadow">
      <div className="flex flex-row-reverse">
        <div>
          <img className="w-32" src={product?.image} alt="" />
        </div>
        <div className="mr-3">
          <h3>{product?.title} </h3>
        </div>
      </div>
      <div>
        <div className="ml-3 text-right flex flex-col justify-center items-center">
          <div>
            <p>قیمت محصول :${product?.price}</p>
            <p>جمع کل:${totalPrice}</p>
          </div>
          <div>
            <Button variant="primery"  onClick={() => {
                      handleIncreseProductQty(parseInt(id as unknown as string));
                    }}>+</Button>
            <span className="mx-5" >{qty}</span>
            <Button variant="primery" onClick={() => {
                      hanleDecProductQty(parseInt(id as unknown as string));
                    }}>-</Button>
          </div>

          <div>
            <Button variant="danger" onClick={() => {
                      handleRemoveProduct(parseInt(id as unknown as string));
                    }}>حذف از سبد خرید</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
