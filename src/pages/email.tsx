import emailjs from "@emailjs/browser";

const Email = () => {
  const user = {
    id: 123,
    name: "Kleiton",
    email: "kleiton.mini@gmail.com",
  };

  const templateParams = {
    from_name: user.name,
    message: user.id,
    email: user.email,
  };

  emailjs.send("service_w670ybe", "template_a13giq9", templateParams, "ZzUm3VSDeBL2jazc4");
};

