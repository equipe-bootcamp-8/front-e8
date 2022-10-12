/* eslint-disable no-restricted-globals */
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import api from "services";
import * as Styled from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

interface LoginData {
  email: string;
  password: string;
  name: string;
}

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email format is invalid")
    .required("Required email field"),

  password: yup
    .string()
    .min(8, "Your password must be at least 8 characters long")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
      "Your password must have at least one special character, one number and one capital letter."
    )
    .required("Required password field"),

  name: yup.string().required("Mandatory name"),
});

const RegisterModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({ resolver: yupResolver(loginSchema) });

  const navigate = useNavigate();

  // const [email, setEmail] = useState("");
  // const [name, setName] = useState("");
  // const [password, setPassword] = useState("");

  const onSubmit = ({ email, name, password }: LoginData) => {
    const data = {
      email,
      name,
      password,
    };

    api
      .post("/users", data)
      .then(() => {
        navigate("/");
        toast.success("Successfully registered user");
      })
      .catch(() => {
        toast.error("User already registered");
      });
  };

  return (
    <div>
      <Styled.FormOverlay>
        <Styled.FormLogin onSubmit={handleSubmit(onSubmit)}>
          <Styled.Title>
            <h2>Create your account</h2>
          </Styled.Title>
          <Styled.FormInternal>
            <label>E-mail address*</label>
            <input
              type="email"
              placeholder="Enter your email address"
              {...register("email")}
            />
            <div className="error">{errors.email?.message}</div>
            <label>Company name</label>
            <input
              type="text"
              placeholder="Enter your name"
              {...register("name")}
            />
            <div className="error">{errors.name?.message}</div>
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              {...register("password")}
            />
            <div className="error">{errors.password?.message}</div>
            {/* <div>{errors.email?.message || errors.name?.message || errors.password?.message}</div> */}
          </Styled.FormInternal>
          <button type="submit">Create</button>
        </Styled.FormLogin>
        <p>
          By signing up you agree to the Terms of Service and Privacy Policy
        </p>
      </Styled.FormOverlay>
    </div>
  );
};

export default RegisterModal;
