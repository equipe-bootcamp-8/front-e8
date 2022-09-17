import SettingsMenu from "components/SettingsMenu";
import * as styled from "./styles";

const UpdateSettings = () => {
  return (
    <styled.SettingsContainer>
      <SettingsMenu path={"update"} />

      <styled.EditEntityContainer>
       
        <styled.EntityEditList>
          
          
          
        </styled.EntityEditList>
      </styled.EditEntityContainer>
    </styled.SettingsContainer>
  );
};

export default UpdateSettings;