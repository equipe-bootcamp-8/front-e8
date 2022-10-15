import SettingsMenu from "components/SettingsMenu";
import * as styled from "./styles";
import settingsIcon from "assets/imgs/settings-icon.png";
import "aos/dist/aos.css";



const Settings = () => {

  return (
    <styled.SettingsContainer>
      <SettingsMenu path={"settings"} />
      <styled.Container data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
        <div>
          <section>
            <h1>Welcome to the settings page!</h1>
            <styled.Bar/>
            <p>
              <strong>Change</strong> your account settings,
              <strong> manage</strong> your products and <strong>perform</strong> batch update on your product list.
            </p>
          </section>
          <img src={settingsIcon} alt="a" />
        </div>
      </styled.Container>
    </styled.SettingsContainer>
  );
};

export default Settings;
