const express = require('express');

const controller = require('../../controllers/auth/index');

const { ctrlWrapper } = require('../../helpers/index');
const { validationBody, authenticate, upload } = require('../../middlewares/index');
const { schemas } = require('../../models/model_user');

const router = express.Router()

router.post('/users/signup', validationBody(schemas.singupSchema), ctrlWrapper(controller.signup));

router.post('/users/login', validationBody(schemas.loginSchema), ctrlWrapper(controller.login));

router.get('/users/logout', authenticate, ctrlWrapper(controller.logout));

router.get('/users/current', authenticate, ctrlWrapper(controller.currentUser));

router.patch('/users', authenticate, validationBody(schemas.updateSubscriptionSchema), ctrlWrapper(controller.updateSubscription));

router.patch('/users/avatars', authenticate, upload.single("avatar"), ctrlWrapper(controller.updateAvatar));

module.exports = router;