import SettingsMenu from "components/SettingsMenu";
import * as styled from "./styles";
import settingsIcon from "assets/imgs/settings-icon.png";
import * as gStyled from "../../assets/styles/globalStyles";
import backgroundSettings from "../../assets/imgs/settings-bg.png";

const Settings = () => {
  return (
    <gStyled.SettingsContainer style={{ backgroundImage: `url(${backgroundSettings})` }}>
      <SettingsMenu path={"settings"} />
      <styled.Container>
        <div>
          <section>
            <h1>Welcome to the settings page!</h1>
            <styled.Bar />
            <p>
              <strong>Change</strong> your account settings,
              <strong>manage</strong> your products and <strong>perform</strong> batch update on your product list.
            </p>
          </section>
          <img src={settingsIcon} alt="a" />
        </div>
      </styled.Container>
    </gStyled.SettingsContainer>
  );
};

export default Settings;
