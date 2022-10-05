import * as styled from "./styles";


interface ProductDetailsProps {
    logged?: boolean | any;
}

const ProductDetails = ({ logged }: ProductDetailsProps) => {
logged(true);

  return (
    <div>ProductDetails</div>
  )
}

export default ProductDetails;