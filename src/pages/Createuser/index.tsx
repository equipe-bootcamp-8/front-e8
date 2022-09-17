import * as Styled from "./styles";
import RegisterModal from "components/RegisterModal";


interface CreateUserProps {
  logged?: boolean | any;
}

const Createuser = ({ logged }: CreateUserProps) => {
  logged(false);
  return (
    <Styled.Background>
      <RegisterModal />
    </Styled.Background>
  );
};

export default Createuser