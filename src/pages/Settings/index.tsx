import SettingsMenu from "components/SettingsMenu";
import * as styled from "./styles";
import settingsIcon from 'assets/imgs/settings-bg1.png'

const Settings = () => {
  return (
    <styled.SettingsContainer>
      <SettingsMenu path={"settings"} />
      <styled.Container>
        <div>
        <h1>Welcome to the settings page!</h1>
        <p>Change your account settings, manage your products and perform batch update on your product list.</p>
        
        </div>
       
        {/*  <img src={settingsIcon} alt="a" />  */}
      </styled.Container>
    </styled.SettingsContainer>
  );
};

export default Settings;
