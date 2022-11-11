import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

interface EmailParams {
  name: string;
  id: string;
  email: string;
}

const SendEmailVerification = ({ name, id, email }: EmailParams) => {
  const templateParams = {
    company_name: "GoingToCloud",
    from_name: name,
    message: `http://localhost:3000/validate/id=${id}`,
    from_email: email,
  };

  emailjs
    .send("service_w670ybe", "template_a13giq9", templateParams, "ZzUm3VSDeBL2jazc4")
    .then(() => {
      toast.success("E-mail enviado!");
    })
    .catch(() => {
      toast.error("Falha no envio!");
    });
};

export default SendEmailVerification;
