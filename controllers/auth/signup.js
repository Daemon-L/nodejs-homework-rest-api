const bcrypt = require('bcryptjs');
const gravatar = require('gravatar');
const { v4 } = require('uuid');

const { User } = require('../../models/model_user');
const { RequestError, sendEmail } = require('../../helpers/index');
const { HOSTING_NAME } = process.env;

const signup = async (req, res) => {
    const { email, password, subscription } = req.body;
    const user = await User.findOne({ email });
    if (user) {
        throw RequestError(409, "Email already exist");
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const avatarURL = gravatar.url(email);

    const verificationToken = v4();

    const result = await User.create({ email, password: hashPassword, subscription, avatarURL, verificationToken });
    
    const mail = {
        to: email,
        subject: "Confirmation of registration",
        html: `<a href=${HOSTING_NAME}${verificationToken} terget="_blank">Click to confirm email</a>`
    };
    await sendEmail(mail);
    res.status(201).json({
        email: result.email,
    });
};

module.exports = signup;