import SettingsMenu from "components/SettingsMenu";
import { useAuth } from "contexts/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "services";
import * as styled from "./styles";

const UserSettings = () => {
  const [data, setData] = useState({email: "", name: "", password: ""});
  const useContext = useAuth();
  const id = useContext.user.id

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ 
      ...data,
      [ event.target.name ]: event.target.value
    }) 
  }

  const token = localStorage.getItem("token");

  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
 
const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const response = await api.patch(`/users/${id}`, headers)
}

const navigate = useNavigate();



  return (
    <styled.SettingsContainer>
      <SettingsMenu path={"user"} />

      <styled.EditEntityContainer>
        <h2>Personal informations</h2>
        <styled.Bar/>
        <styled.EntityEditList onSubmit={onSubmit}>
          <styled.ButtonUpload>Upload image</styled.ButtonUpload>
          {/* não tem imagem no back */}

          <styled.PersonalInformations >
            <div>
              <h2>E-mail address</h2>
              <input onChange={handleChange} name="email" type="email" />
            </div>

            <div>
              <h2>Name</h2>
              <input onChange={handleChange} name="name" type="name" />
            </div>
          </styled.PersonalInformations>
          <styled.PersonalInformations>
            <div>
              <h2>Password</h2>
              <input onChange={handleChange} name="password" type="password" />
            </div>
            <div>
              <h2>Confirm Password</h2>
              <input onChange={handleChange} name="password" type="password" />
            </div>
          </styled.PersonalInformations>
          <styled.Buttons>
            <styled.SaveButton>Save Changes</styled.SaveButton>
            <styled.DiscardButton onClick={() => navigate("/")}>Discard changes</styled.DiscardButton>
          </styled.Buttons>
        </styled.EntityEditList>
      </styled.EditEntityContainer>
    </styled.SettingsContainer>
  );
};

export default UserSettings;
