import SettingsMenu from "components/SettingsMenu";
import * as styled from "./styles";

const BulkUpdateSettings = () => {
  return (
    <styled.SettingsContainer>
      <SettingsMenu path={"update"} />

      <styled.EditEntityContainer>
        <h2>Spreadsheet massive update</h2>
        <styled.Bar />
        <styled.EntityEditList>
          <styled.Input
            type="file"
            id="file"
            accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
          />
          <styled.Label htmlFor="file">
            Choose excel sheet
          </styled.Label>
          <styled.ButtonUpload>Upload Spreadsheet</styled.ButtonUpload>
          <styled.ButtonUpload>Download File</styled.ButtonUpload>
        </styled.EntityEditList>
      </styled.EditEntityContainer>
    </styled.SettingsContainer>
  );
};

export default BulkUpdateSettings;
