const signup = require('./signup');
const login = require('./login');
const logout = require('./logout');
const updateSubscription = require('./updateSubscription');
const currentUser = require('./currentUser');
const updateAvatar = require('./updateAvatar');
const verifyEmail = require('./verifyEmail');
const resendVerifyEmail = require('./resendVerifyEmail.js')

module.exports = {
   signup,
   login,
   logout,
   updateSubscription,
   currentUser,
   updateAvatar,
   verifyEmail,
   resendVerifyEmail,
}