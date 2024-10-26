import { useEffect, useState } from "react";
import Container from "../../Components/Conteiner/Conteiner";
import Button from "../../Components/botton/Botton";
import { useParams } from "react-router-dom";
import { getProduct } from "../../services/api";
import { productsTypes } from "../../assets/types/serversType";
import { useShoppingCartContext } from "../../context/ShopingCartContext";

function ProductPage() {
  const {
    handleIncreseProductQty,
    hanleDecProductQty,
    cartItems,
    getProductQty,
    handleRemoveProduct,
  } = useShoppingCartContext();
  console.log(cartItems);

  const params = useParams<{ id: string }>();
  const [productItem, setProductItem] = useState<productsTypes>();

  useEffect(() => {
    getProduct(params.id as string).then((data) => {
      setProductItem(data);
    });
  }, []);

  return (
    <div>
      <Container>
        <div
          dir="rtl"
          className="mt:4 sm:mt-14  gap-3 shadow shadow-gray-400  grid sm:grid-cols-2"
        >
          <div>
            <img
              className="p-14  w-96 m-auto "
              src={productItem?.image}
              alt=""
            />
          </div>
          <div className="">
            <h1 className="text-4xl sm:mt-14">{productItem?.title}</h1>
            <div className="mt-4">
              <p className="text-md">قیمت:{productItem?.price}$</p>
              <p>{productItem?.description}</p>
            </div>

            {getProductQty(parseInt(params.id as string)) === 0 ? (
              <Button
                variant="success"
                onClick={() => {
                  handleIncreseProductQty(parseInt(params.id as string));
                }}
                id="btn"
              >
                افزودن به سبد خرید
              </Button>
            ) : (
              <>
                <div className="mx-2">
                  <Button
                    variant="primery"
                    onClick={() => {
                      hanleDecProductQty(parseInt(params.id as string));
                    }}
                  >
                    -
                  </Button>
                  <span className="mx-3 text-2xl">
                    {getProductQty(parseInt(params.id as string))}
                  </span>
                  <Button
                    variant="primery"
                    onClick={() => {
                      handleIncreseProductQty(parseInt(params.id as string));
                    }}
                    id="btn"
                  >
                    +
                  </Button>
                </div>
                <div>
                  <Button
                    variant="danger"
                    onClick={() => {
                      handleRemoveProduct(parseInt(params.id as string));
                    }}
                  >
                    {" "}
                    حذف از سبد خرید{" "}
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ProductPage;
