import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from './product'

function ProductDetails() {
  const api_url = 'https://fakestoreapi.com/products';
  const params = useParams()
  const [product, setproduct] = useState([])
  useEffect(() => {
    fetch(`${api_url}/${params.productId}`).then((res) => res.json()).then((product) => setproduct(product))
  }, [params.productId])
  return (<>
    <Product product={product} viewButton={false} />
  </>);
}
export default ProductDetails;