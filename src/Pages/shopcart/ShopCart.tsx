import CartItem from "../../Components/cartItem/CartItem";
import Container from "../../Components/Conteiner/Conteiner";
import Button from "../../Components/botton/Botton";
import { useShoppingCartContext } from "../../context/ShopingCartContext";




function ShopCart() {
  const { cartItems,CartQty} = useShoppingCartContext();

const totalPrice= ""

  return (
    <Container>
      <div className="">
        {
          cartItems.map(item=>(
            <CartItem {...item}/>
          ))
        }
       
      </div>
      <div className="text-right flex justify-between flex-row-reverse bg-gray-300">
        <div className="">
          <p>{}:قیمت کل</p>
          <p>2,000 :تخفیف</p>
          <p>200,000: قیمت نهایی</p>
        </div>
        <div className="ml-5">
          <Button variant="success">تایید نهایی خرید</Button>
        </div>
      </div>
    </Container>
  );
}

export default ShopCart;
