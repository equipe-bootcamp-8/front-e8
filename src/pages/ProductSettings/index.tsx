import DeleteProductModal from "components/DeleteProductModal";
import ProductModal from "components/ProductModal";
import ProductSettingsCard from "components/ProductSettingsCard";
import SettingsMenu from "components/SettingsMenu";
import { useProducts } from "contexts/products";
import { useState } from "react";
import { Product } from "types";
import * as styled from "./styles";

interface ProductSettingsProps {
  logged?: boolean | any;
}

const ProductSettings = ({ logged }: ProductSettingsProps) => {
  const { products } = useProducts();
  const [product, setProduct] = useState<Product | undefined>(undefined);
  logged(true);

  /* ----MODAL---    */
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };
  const handleOpenDeleteModal = () => {
    setOpenDeleteModal(!openDeleteModal);
  };
  /* --------- */

  return (
    <styled.SettingsContainer>
      <SettingsMenu path={"products"} />
      <styled.EditEntitiesContainer>
        <h2>Manage Products</h2>
        <styled.Bar />
        <styled.SearchInputContainer>
          <input
          /*  value={searchInputValue}
              onChange={(e) => setSearchInputValue(e.target.value)}
              placeholder="Procure pelo sabor"  */
          />
        </styled.SearchInputContainer>

        <styled.EntitiesEditList>
          <styled.AddEntitieCard onClick={handleOpenModal}>
            <h2>+</h2>
            <p>Add Product</p>
          </styled.AddEntitieCard>

          {products.map((element) => (
            <ProductSettingsCard
              handleOpenModal={handleOpenModal}
              handleOpenDeleteModal={handleOpenDeleteModal}
              setProduct={setProduct}
              product={element}
              key={element.id}
            />
          ))}
        </styled.EntitiesEditList>
      </styled.EditEntitiesContainer>

      {openModal && (
        <ProductModal
          setProduct={setProduct}
          product={product}
          handleOpenModal={handleOpenModal}
        />
      )}

      {openDeleteModal && (
        <DeleteProductModal
          setProduct={setProduct}
          productId={product?.id}
          handleOpenDeleteModal={handleOpenDeleteModal}
        />
      )}
    </styled.SettingsContainer>
  );
};

export default ProductSettings;
