import SettingsMenu from "components/SettingsMenu";
import * as styled from "./styles";


interface BulkUpdateSettingsProps {
  logged?: boolean | any;
}

const BulkUpdateSettings = ({ logged }: BulkUpdateSettingsProps) => {
  logged(true);
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