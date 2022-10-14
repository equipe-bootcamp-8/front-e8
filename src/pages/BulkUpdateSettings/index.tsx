import SettingsMenu from "components/SettingsMenu";
import * as styled from "./styles";



const BulkUpdateSettings = () => {

  return (
    <styled.SettingsContainer>
      <SettingsMenu path={"update"} />
      
      <styled.EditEntityContainer>
      <h2>Spreadsheet massive update</h2>
      <styled.Bar/>
        <styled.EntityEditList>
        <styled.ButtonUpload>Upload Spreadsheet</styled.ButtonUpload>
        <styled.ButtonUpload>Download File</styled.ButtonUpload>
        </styled.EntityEditList>
      </styled.EditEntityContainer>
    </styled.SettingsContainer>
  );
};

export default BulkUpdateSettings;