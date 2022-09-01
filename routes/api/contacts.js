const express = require('express');

const { ctrlWrapper } = require('../../helpers/index');
const { authenticate, validationBody, isValidId } = require('../../middlewares/index');
const { schemas } = require('../../models/model_contact');
const controller = require('../../controllers/contacts/index');

const router = express.Router()

router.get('/', authenticate, ctrlWrapper(controller.getAll));

router.get("/:id", authenticate, isValidId, ctrlWrapper(controller.getById));

router.post('/', authenticate, validationBody(schemas.addSchema), ctrlWrapper(controller.add));

router.put('/:id', authenticate, isValidId, validationBody(schemas.addSchema), ctrlWrapper(controller.updateById));

router.patch('/:id/favorite', authenticate, isValidId, validationBody(schemas.updateFavoriteSchema), ctrlWrapper(controller.updateFavorite));

router.delete('/:id', authenticate, isValidId, ctrlWrapper(controller.removeById));

module.exports = router;