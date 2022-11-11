import SettingsMenu from "components/SettingsMenu";
import { useAuth } from "contexts/auth";
import { useState } from "react";
import api from "services";
import * as styled from "./styles";
import * as gStyled from "../../assets/styles/globalStyles";

import ResetPasswordModal from "components/Modal/ResetModal";

const UserSettings = () => {
  const [data, setData] = useState({email: "", name: "", image: ""});
  const {user} = useAuth();
  // const id = useContext.user.id

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
  const response = await api.patch(`/users/${user.id}`, headers)
}

const [openModal, setOpenModal] = useState<boolean>(false);
const handleOpenModal = () => {
  setOpenModal(!openModal);
};


  return (

    <styled.SettingsContainer>
      <SettingsMenu path={"user"}/>
      {openModal && <ResetPasswordModal handleOpenModal={handleOpenModal} />}
      <gStyled.EditEntitiesContainer>
        <h2>Personal informations</h2>
        <styled.Bar/>
        <styled.UserSettings onSubmit={onSubmit}>
         
          
          <styled.PersonalInformations >
           

            <label htmlFor="image">Upload Image</label>
            <styled.UploadBtn onChange={handleChange} id="image" name="image" type="file" />
          
            <div>
              <h2>Company name / Your name</h2>
              <styled.Input onChange={handleChange} name="name" type="name" />
            </div>
            <div>
              <h2>E-mail address</h2>
              <styled.Input onChange={handleChange} name="email" type="email" />
            </div>
            <styled.Buttons>
          
            <styled.SaveButton>Save Changes</styled.SaveButton>
            <styled.DiscardButton onClick={handleOpenModal}>Reset Password</styled.DiscardButton>
         
          </styled.Buttons>
          </styled.PersonalInformations>
             
        </styled.UserSettings>   
      </gStyled.EditEntitiesContainer>
    </styled.SettingsContainer>
  );
};

export default UserSettings;
