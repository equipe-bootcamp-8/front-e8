import { useState, useContext } from "react";
import * as Styled from "./styles";
import { AuthContext } from "contexts/auth";
import toast from "react-hot-toast";
const LoginModal = () => {
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div>
      <div>
        <Styled.FormLogin onSubmit={handleSubmit}>
          <Styled.Title>
            <h2>Log in to your account</h2>
          </Styled.Title>
          <Styled.FormInternal>
            <label>E-mail</label>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Styled.FormInternal>
          <button type="submit">Log in</button>
        </Styled.FormLogin>
      </div>
    </div>
  );
};

export default LoginModal;
