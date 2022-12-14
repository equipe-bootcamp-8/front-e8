import * as styled from "./styles";
import { useNavigate } from "react-router-dom";
import { useAuth } from "contexts/auth";

interface MenuSettingsProps {
  path: "products" | "user" | "update" | "settings" | "categories";
}

const SettingsMenu = ({ path }: MenuSettingsProps) => {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <styled.SettingsNavigationContainer>
      <h2>Settings</h2>
      <styled.UserInfos>
        <div>
         <h3>{user.name}</h3> 
         <h3>{user.email}</h3> 
        </div>
      </styled.UserInfos>
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
          active={path === "categories"}
          onClick={() => navigate("/settings/categories")}
        >
          <styled.SettingsNavigationButtonSelected
            active={path === "categories"}
          >
            <h2>Categories</h2>
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
          onClick={() => navigate("/settings/spreadsheet")}
        >
          <styled.SettingsNavigationButtonSelected active={path === "update"}>
            <h2>Spreadsheet Update</h2>
          </styled.SettingsNavigationButtonSelected>
        </styled.SettingsNavigationButtonsContainer>

       
      </styled.SettingsNavigationButtonsList>
    </styled.SettingsNavigationContainer>
  );
};

export default SettingsMenu;
