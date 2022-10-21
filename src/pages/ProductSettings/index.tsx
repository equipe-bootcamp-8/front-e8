import DeleteProductModal from "components/DeleteProductModal";
import ProductModal from "components/ProductModal";
import ProductSettingsCard from "components/ProductSettingsCard";
import SettingsMenu from "components/SettingsMenu";
import { useProducts } from "contexts/products";
import { useState } from "react";
import { Product } from "types";
import * as styled from "./styles";

const ProductSettings = () => {
  const { products } = useProducts();
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [search, setSearch] = useState("");

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
          <input type="text" placeholder="Search by NFT name..." onChange={(event) => setSearch(event.target.value)} />
        </styled.SearchInputContainer>

        <styled.EntitiesEditList>
          <styled.AddEntitieCard onClick={handleOpenModal}>
            <h2>+</h2>
            <p>Add Product</p>
          </styled.AddEntitieCard>

          {products
            .filter((element) => {
              if (search === "") {
                return element;
              } else if (element.name.toLowerCase().includes(search.toLowerCase())) {
                return element;
              }
            })
            .map((element) => (
              <ProductSettingsCard handleOpenModal={handleOpenModal} handleOpenDeleteModal={handleOpenDeleteModal} setProduct={setProduct} product={element} key={element.id} />
            ))}
        </styled.EntitiesEditList>
      </styled.EditEntitiesContainer>

      {openModal && <ProductModal setProduct={setProduct} product={product} handleOpenModal={handleOpenModal} />}

      {openDeleteModal && <DeleteProductModal setProduct={setProduct} productId={product?.id} handleOpenDeleteModal={handleOpenDeleteModal} />}
    </styled.SettingsContainer>
  );
};

export default ProductSettings;
