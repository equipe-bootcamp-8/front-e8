import SettingsMenu from "components/SettingsMenu";
import * as styled from "./styles";


const BulkUpdateSettings = () => {
  return (
    <styled.SettingsContainer>
      <SettingsMenu path={"update"} />

      <styled.UpdateContainer>
        <h2>Bulk Update</h2>
        <styled.Bar />
        <styled.BoardButtons>
          <styled.Input
            type="file"
            id="file"
            accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
          />
          <styled.Label htmlFor="file">
            Import file
          </styled.Label>
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
