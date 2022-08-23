const express = require('express');

const { ctrlWrapper } = require('../../helpers/index');
const { validationBody, isValidId } = require('../../middlewares/index');
const { schemas } = require('../../models/model_contact');
const controller = require('../../controllers/contacts/index');

const router = express.Router()

router.get('/', ctrlWrapper(controller.getAll));

router.get("/:id", isValidId, ctrlWrapper(controller.getById));

router.post('/', validationBody(schemas.addSchema), ctrlWrapper(controller.add));

router.put('/:id', isValidId, validationBody(schemas.addSchema), ctrlWrapper(controller.updateById));

router.patch('/:id/favorite', isValidId, validationBody(schemas.updateFavoriteSchema), ctrlWrapper(controller.updateFavorite));

router.delete('/:id', isValidId, ctrlWrapper(controller.removeById));

module.exports = router;