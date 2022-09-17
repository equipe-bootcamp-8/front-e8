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
        <styled.EntityEditList></styled.EntityEditList>
      </styled.EditEntityContainer>
    </styled.SettingsContainer>
  );
};

export default BulkUpdateSettings;