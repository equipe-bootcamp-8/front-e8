import SettingsMenu from "components/SettingsMenu";
import * as styled from "./styles";
import * as gStyled from "../../assets/styles/globalStyles";
import backgroundUpdate from "../../assets/imgs/update-settingsbg.png";
import * as XLSX from "xlsx";
import { useEffect, useState } from "react";
import api from "services";
import { useProducts } from "contexts/products";
import { MenuItem } from "components/Navbar/styles";
import toast from "react-hot-toast";

const BulkUpdateSettings = () => {
  const [sheet, setSheet] = useState<any>([]);
  const { products } = useProducts();

  // const [categoryName, setcategoryName] = useState<string>(
  //   product ? product.categoryName : ""
  // );

  const token = localStorage.getItem("token");

  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  // const handleUpdateProduct = (data: ProductData) => {
  //   data.categoryName = categoryName;
  //  api.patch(`/products/${product?.id}`, data, headers).then(() => {
  //     toast.success("Product updated succesfully!");
  //     handleGetProducts();
  //     handleOpenModal();
  //     setProduct(undefined);
  //   });
  // };

  const handleFile = async (e: any) => {
    const file = e.target.files[0];
    const data = await file.arrayBuffer();
    const workbook = XLSX.read(data);

    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);

    setSheet(jsonData);
    console.log(jsonData);
  };

  const sheetId = sheet.map((item: any) => item.id);

  // const productCode = products.map((item) => item.id);

  console.log(sheetId);
  // console.log(productCode);

  // const filter = sheetId.filter((a: number) => productCode.includes(a));

  const handleUpdateExcel = (e: { preventDefault: () => void }) => {
    
    sheet.map((item: { code: number; discount: number }) => {

      products.map((product) => {
        if (item.code === product.code){
          const value = product.price * (item.discount / 100);
          const data = { price: value.toFixed(2) };
          
          api.patch(`/products/${product.id}`, data, headers);
        }
      });
    });
  };

  return (
    <gStyled.SettingsContainer
      style={{ backgroundImage: `url(${backgroundUpdate})` }}
    >
      <SettingsMenu path={"update"} />

      <styled.UpdateContainer>
        <h2>Bulk Update</h2>
        <styled.Bar />
        <styled.BoardButtons>
          <styled.Input
            type="file"
            id="file"
            accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
            onChange={(e) => handleFile(e)}
          />
          <button onClick={(e) => handleUpdateExcel(e)}>enviar</button>
          <styled.Label htmlFor="file">Import file</styled.Label>
          <styled.DownloadButton>Download File</styled.DownloadButton>
        </styled.BoardButtons>
        <div>
          <h2>Change history</h2>
          <styled.Bar />
          <styled.Header>
            <h3>Name</h3>
            <h3>Date</h3>
          </styled.Header>
          <styled.Bar />
          <styled.userData>
            <h3>User name / e-mail</h3>
            <h3>00/00/0000 at 11:11</h3>
          </styled.userData>
          <styled.Bar />
        </div>
      </styled.UpdateContainer>
    </gStyled.SettingsContainer>
  );
};

export default BulkUpdateSettings;
