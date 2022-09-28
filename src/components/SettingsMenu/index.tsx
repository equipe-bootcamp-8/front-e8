import * as styled from "./styles";
import { useNavigate } from "react-router-dom";

interface MenuSettingsProps {
  path: "products" | "user" | "update" | "settings";
}

const SettingsMenu = ({ path }: MenuSettingsProps) => {
  const navigate = useNavigate();
  return (
    <styled.SettingsNavigationContainer>

      <h2>Settings</h2>

      <h3>Company Name</h3>
      <h3>company@mail.com</h3>
      <styled.SettingsNavigationButtonsList>
        <styled.SettingsNavigationButtonsContainer
          active={path === "products"}
          onClick={() => navigate("/settings/products")}
        >
          <styled.SettingsNavigationButtonSelected active={path === "products"}>
            
            <h2>Products</h2>
        
          </styled.SettingsNavigationButtonSelected>
        </styled.SettingsNavigationButtonsContainer>

        <styled.SettingsNavigationButtonsContainer
          active={path === "user"}
          onClick={() => navigate("/settings/user")}
        >
          <styled.SettingsNavigationButtonSelected active={path === "user"}>
            <h2>User</h2>
          </styled.SettingsNavigationButtonSelected>
        </styled.SettingsNavigationButtonsContainer>

        <styled.SettingsNavigationButtonsContainer
         active={path === "update"}
         onClick={() => navigate("/settings/bulk#update")}
         >
          <styled.SettingsNavigationButtonSelected active={path === "update"}>
           
            <h2>Excel</h2>

          </styled.SettingsNavigationButtonSelected>
        </styled.SettingsNavigationButtonsContainer> 
      </styled.SettingsNavigationButtonsList>
    </styled.SettingsNavigationContainer>
  );
};

export default SettingsMenu;