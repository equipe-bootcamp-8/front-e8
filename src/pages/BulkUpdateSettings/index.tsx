import SettingsMenu from "components/SettingsMenu";
import * as styled from "./styles";
import * as gStyled from "../../assets/styles/globalStyles";
import backgroundUpdate from "../../assets/imgs/update-settingsbg.png";
import * as XLSX from "xlsx";
import { useState } from "react";
import api from "services";
import { useProducts } from "contexts/products";
import { toast } from "react-toastify";
import ConfirmModal from "components/Modal/ConfirmModal";
import { useNavigate } from "react-router-dom";
import getData from "components/Mocks/exapleSheet";

const BulkUpdateSettings = () => {
  const [sheet, setSheet] = useState<any>([]);
  const { products } = useProducts();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [state, setState] = useState(false);
  const [fileName, setFileName] = useState("");
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
    setFileName(file.name);
  };

  const handleOpenModal = () => {
    setOpenModal(false);
  };

  const handleUpdateExcel = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    sheet.map((item: { code: number; discount: number }) => {
      products.map((product) => {
        if (item.code === product.code) {
          const value = product.price * (1 - item.discount / 100);
          const data = { price: +value.toFixed(2) };

          api.patch(`/products/${product?.id}`, data, headers);
        }
      });
    });
    toast.info("Loading update!", {
      position: "top-right",
      autoClose: 5500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    setTimeout(() => {
      navigate("/settings/products");
    }, 6000);
  };

  const handleOnExport = () => {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(getData());

    XLSX.utils.book_append_sheet(wb, ws, "MySheet1");

    XLSX.writeFile(wb, "ExampleSheet.xlsx");
  };

  return (
    <gStyled.SettingsContainer
      style={{ backgroundImage: `url(${backgroundUpdate})` }}
    >
      <SettingsMenu path={"update"} />

      {openModal && (
        <ConfirmModal
          handleOpenModal={handleOpenModal}
          handleUpdateExcel={handleUpdateExcel}
          openModal2={openModal2}
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
            <styled.Label htmlFor="file">
              <span>{fileName ? fileName: "Import sheet"}</span>
              <span>Search</span>
            </styled.Label>
            {state && (
              <styled.SendButton onClick={() => openModal2()}>
                Send file
              </styled.SendButton>
            )}
          </styled.WrapperInputButton>
          <styled.DownloadButton onClick={() => handleOnExport()}>
            Download example sheet
          </styled.DownloadButton>
        </styled.BoardButtons>
        {/* <div>
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
        </div>  */}
      </styled.UpdateContainer>
    </gStyled.SettingsContainer>
  );
};

export default BulkUpdateSettings;
