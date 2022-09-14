const { User } = require('../../models/model_user');
const { RequestError, sendEmail } = require('../../helpers/index');
const { HOSTING_NAME } = process.env;

const resendVerifyEmail = async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if(!user) {
        throw RequestError(404, "Not found user");
    }
    if(user.verify) {
        throw RequestError(400, "Verification has already been passed");
    }
    const mail = {
        to: email,
        subject: "Confirmation of registration",
        html: `<a href=${HOSTING_NAME}${user.verificationToken} terget="_blank">Click to confirm email</a>`
    };
    await sendEmail(mail);

    res.json({
        message: "Email verify resend"
    });
};

module.exports = resendVerifyEmail;