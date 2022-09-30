import SettingsMenu from "components/SettingsMenu";
import * as styled from "./styles";
import settingsIcon from "assets/imgs/settings-icon.png";

interface SettingsProps {
  logged?: boolean | any;
}

const Settings = ({ logged }: SettingsProps) => {
  logged(true);
  return (
    <styled.SettingsContainer>
      <SettingsMenu path={"settings"} />
      <styled.Container>
        <div>
          <section>
            <h1>Welcome to the settings page!</h1>
            <styled.Bar/>
            <p>
              <strong>Change</strong> your account settings,
              <strong>manage</strong> your products and <strong>perform</strong> batch update on your product list.
            </p>
          </section>
          <img src={settingsIcon} alt="a" />
        </div>
      </styled.Container>
    </styled.SettingsContainer>
  );
};

export default Settings;
