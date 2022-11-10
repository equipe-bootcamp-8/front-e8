import SettingsMenu from "components/SettingsMenu";
import { useAuth } from "contexts/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "services";
import * as styled from "./styles";
import * as gStyled from "../../assets/styles/globalStyles";
import backgroundUser from "../../assets/imgs/user-settingsbg.png";

const UserSettings = () => {
  const [data, setData] = useState({email: "", name: "", image: ""});
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

    <gStyled.SettingsContainer style={{backgroundImage: `url(${backgroundUser})`}}>
      <SettingsMenu path={"user"}/>
      <gStyled.EditEntitiesContainer>
        <h2>Personal informations</h2>
        <styled.Bar/>
        <styled.UserSettings onSubmit={onSubmit}>
         
          
          <styled.PersonalInformations >
            <h2>Personal informations.</h2>
            <styled.Input onChange={handleChange} name="image" type="file" />

            <div>
              <h2>Company name / Your name</h2>
              <styled.Input onChange={handleChange} name="name" type="name" />
            </div>
            <div>
              <h2>E-mail address</h2>
              <styled.Input onChange={handleChange} name="email" type="email" />
            </div>
            <styled.SaveButton>Save Changes</styled.SaveButton>
          </styled.PersonalInformations>
          <styled.PersonalInformations>
            <h2>Security.</h2>
            
            <div>
            </div>
            <styled.Buttons>
            <styled.DiscardButton>Discard changes</styled.DiscardButton>
            <styled.DiscardButton>Reset Password</styled.DiscardButton>
            </styled.Buttons>
            
          </styled.PersonalInformations>     
        </styled.UserSettings>   
      </gStyled.EditEntitiesContainer>
    </gStyled.SettingsContainer>
  );
};

export default UserSettings;
