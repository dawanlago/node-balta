const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  secure: false,
  auth: {
    user: "dawan.lago@hotmail.com",
    pass: "Dl@91429400",
  },
});

exports.send = async (to) => {
  transporter.sendMail({
    from: "Dawan Lago <dawan.lago@hotmail.com>",
    to: to,
    subject: "Assunto",
    text: "Olá, esse é um teste",
    html: "<b>Teste</b> <a href='https://www.guiadoprogramador.com.br'>Guia do Programador</a>",
  });
};
