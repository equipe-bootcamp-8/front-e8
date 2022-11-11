import ValidationModal from "../../components/Modal/ValidationModal";
import * as Styled from "./styles";

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const Validations = () => {
  return (
    <div>
      <Styled.Background>
        <ValidationModal />
      </Styled.Background>
    </div>
  );
};

export default Validations;
