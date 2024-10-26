import { productsTypes } from "../../assets/types/serversType";

type IprodutcItem = productsTypes

function ProductItem({image,price,title}:productsTypes ) {
 

  return (
    <div className="shadow shadow-gray-400 mt-5 ">
      <img
        className="m-auto h-96 rounded-t"
        src={image}
        alt=""
      />
      <div className="p-4">
        <h3 className="line-clamp-1">{title}</h3>
        <p>{price} $</p>
      </div>
    </div>
  );
}

export default ProductItem;
