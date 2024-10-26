import { useEffect, useState } from "react";
import Container from "../../Components/Conteiner/Conteiner";
import ProductItem from "../../Components/productItem/ProductItem";
import { Link } from "react-router-dom";
import { getProducts } from "../../services/api";
import { productsTypes } from "../../assets/types/serversType";



function Store() {
  const [products, setProducts] = useState<productsTypes[]>([]);

  useEffect(() => {
    getProducts().then((result) => {
      setProducts(result);
    });
  }, []);


  return (
    <Container>
      <div className="text-right">
        <h1 className="text-2xl mt-14">جدیدترین محصولات</h1>
        <div className="grid grid-cols-4 mt-5 gap-5 ">
          {
            products.map(item=>(
              <Link key={item.id} to={`/product/${item.id}`}>
              <ProductItem {...item} />
            </Link>
            ))
          }
          
        </div>
      </div>
    </Container>
  );
}

export default Store;
