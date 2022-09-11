// const nodemailer = require("nodemailer");
// require('dotenv').config();

// const { META_PASSWORD } = process.env;

// const nodemailerConfig = {
//   host: "smtp.meta.ua",
//   port: 465, // 25, 465, 2255
//   secure: true,
//   auth: {
//     user: "litinskyi@meta.ua",
//     pass: META_PASSWORD,
//   }
// };

// const transporter = nodemailer.createTransport(nodemailerConfig);

// const sendEmailMeta = async (data) => {
//     // eslint-disable-next-line no-useless-catch
//     try {
//         const email = { ...data, from: "litinskyi@meta.ua" };
//         await transporter.sendMail(email);
//         return true;
//     } catch (error) {
//         throw error;
//     }
// }

// module.exports = sendEmailMeta;

// const email = {
//   to: "wombatcombatua@gmail.com",
//   from: "litinskyi@meta.ua",
//   subject: "test_2",
//   html: "Ура, письмо #2 пришло!"
// };
// transporter.sendMail(email)
//   .then(() => console.log("Email send success!"))
//   .catch(error => console.log(error.message))