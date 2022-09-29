import SettingsMenu from "components/SettingsMenu";
import * as styled from "./styles";

interface UserSettingProps {
  logged?: boolean | any;
}

const UserSettings = ({ logged }: UserSettingProps) => {
  logged(true);
  return (
    <styled.SettingsContainer>
      <SettingsMenu path={"user"} />

      <styled.EditEntityContainer>
        <h2>Personal informations</h2>
        <styled.Bar/>
        <styled.EntityEditList>
          <styled.ButtonUpload>Upload image</styled.ButtonUpload>

          <styled.PersonalInformations>
            <div>
              <h2>E-mail address</h2>
              <input type="email" />
            </div>

            <div>
              <h2>Name</h2>
              <input type="name" />
            </div>
          </styled.PersonalInformations>
          <styled.PersonalInformations>
            <div>
              <h2>Password</h2>
              <input type="" />
            </div>
            <div>
              <h2>Confirm Password</h2>
              <input type="" />
            </div>
          </styled.PersonalInformations>
          <styled.Buttons>
            <styled.SaveButton>Save Changes</styled.SaveButton>
            <styled.DiscardButton>Discard changes</styled.DiscardButton>
          </styled.Buttons>
        </styled.EntityEditList>
      </styled.EditEntityContainer>
    </styled.SettingsContainer>
  );
};

export default UserSettings;
