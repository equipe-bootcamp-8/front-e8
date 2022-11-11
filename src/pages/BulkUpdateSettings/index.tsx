import SettingsMenu from "components/SettingsMenu";
import * as styled from "./styles";
import * as gStyled from "../../assets/styles/globalStyles";

import * as XLSX from "xlsx";
import { useEffect, useState } from "react";
import api from "services";
import { useProducts } from "contexts/products";

import ConfirmModal from "components/Modal/ExcelConfirmModal";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const BulkUpdateSettings = () => {
  const [sheet, setSheet] = useState<any>([]);
  const { products, handleGetProducts } = useProducts();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [state, setState] = useState(false);
  const navigate = useNavigate();

  const openModal2 = () => {
    setOpenModal(!openModal);
  };

  // const [categoryName, setcategoryName] = useState<string>(
  //   product ? product.categoryName : ""
  // );

  const token = localStorage.getItem("token");

  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const handleFile = async (e: any) => {
    const file = e.target.files[0];
    const data = await file.arrayBuffer();
    const workbook = XLSX.read(data);

    const worksheet = workbook.Sheets[workbook.SheetNames[0]];

    const jsonData = XLSX.utils.sheet_to_json(worksheet);

    setSheet(jsonData);
    setState(true);
  };

  const handleOpenModal = () => {
    setOpenModal(false);
  };

  const handleUpdateExcel = (e: { preventDefault: () => void }) => {
    // e.preventDefault();
    sheet.map((item: { code: number; discount: number }) => {
      products.map((product) => {
        if (item.code === product.code) {
          const value = product.price * (1 - item.discount / 100);
          const data = { price: +value.toFixed(2) };

          api.patch(`/products/${product?.id}`, data, headers);
        }
      });
    });
    toast.success("Success update");

    navigate("/settings/products");
  };

  return (
    <styled.SettingsContainer
      
    >
      <SettingsMenu path={"update"} />

      {openModal && (
        <ConfirmModal
          handleOpenModal={handleOpenModal}
          handleUpdateExcel={handleUpdateExcel}
        />
      )}

      <styled.UpdateContainer>
        <h2>Bulk Update</h2>
        <styled.Bar />
        <styled.BoardButtons>
          <styled.WrapperInputButton>
            <styled.Input
              type="file"
              id="file"
              accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
              onChange={(e) => handleFile(e)}
            />
            <styled.Label htmlFor="file">Import file</styled.Label>
            {state && (
              <styled.SendButton onClick={() => openModal2()}>
                Send file
              </styled.SendButton>
            )}
          </styled.WrapperInputButton>
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
    </styled.SettingsContainer>
  );
};

export default BulkUpdateSettings;
