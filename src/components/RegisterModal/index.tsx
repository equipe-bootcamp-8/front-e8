import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import api from "services";
import * as Styled from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import SendEmailVerification from "services/email";
import { useContext } from "react";
import { AuthContext } from "contexts/auth";

interface LoginData {
  email: string;
  password: string;
  name: string;
}

export type RegisterProps = {
  erro?: boolean;
};

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email format is invalid")
    .required("Required email field"),

  password: yup
    .string()
    .min(8, "Your password must be at least 8 characters long")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#.])[0-9a-zA-Z$*&@#.]{8,}$/,
      "Your password must have at least one special character, one number and one capital letter."
    )
    .required("Required password field"),

  name: yup.string().required("Mandatory name"),
});

const RegisterModal = () => {
  const { login } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: yupResolver(loginSchema),
  });

  const navigate = useNavigate();

  const onSubmit = ({ email, name, password }: LoginData) => {
    const data = {
      email,
      name,
      password,
    };

    api
      .post("/users", data)
      .then(async (res: any) => {
        const user = {
          id: res.data.id,
          name: res.data.name,
          email: res.data.email,
        };
        await login(data.email, data.password);
        SendEmailVerification(user);
        navigate("/validate");
        toast.success("User registered successfully registered");
      })
      .catch(() => {
        toast.error("User already registered");
      });

  };

  return (
    <Styled.Body>
      <Styled.FormOverlay>
        <Styled.FormLogin onSubmit={handleSubmit(onSubmit)}>
          <Styled.Title>
            <h2>Create your account</h2>
          </Styled.Title>
          <Styled.FormInternal>
            <label>E-mail address</label>
            <Styled.Input
              type="email"
              placeholder={
                errors.email
                  ? errors.email?.message
                  : "Enter your email address"
              }
              erro={errors.email ? true : false}
              {...register("email")}
            />
            <label>Company name</label>
            <Styled.Input
              type="text"
              placeholder={
                errors.name ? errors.name?.message : "Enter your name"
              }
              erro={errors.name ? true : false}
              {...register("name")}
            />
            <label>Password</label>
            <Styled.Input
              type="password"
              placeholder={
                errors.password
                  ? "Error read the instructions below"
                  : "Enter your password"
              }
              erro={errors.password ? true : false}
              {...register("password")}
            />
            <div className="error">{errors.password?.message}</div>
          </Styled.FormInternal>
          <Styled.CreateButton type="submit">Create</Styled.CreateButton>
        </Styled.FormLogin>
        <p>
          By signing up you agree to the Terms of Service and Privacy Policy
        </p>
      </Styled.FormOverlay>
      <Styled.a onClick={() => navigate("/")}>
        I already have an account
      </Styled.a>
    </Styled.Body>
  );
};

export default RegisterModal;
