const { Schema, model } = require('mongoose');
const Joi = require('joi');

const emailRegexp = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
// const phoneRegexp = /^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/;

const { hendleSchemaValidationErrors } = require('../helpers/index');

const contactShema = new Schema({
    name: {
      type: String,
      unique: true,
      required: [true, 'Set name for contact'],
    },
    email: {
      type: String,
      match: emailRegexp,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
}, { versionKey: false, timestamps: true });

contactShema.post("save", hendleSchemaValidationErrors)

// ** Joi schemas ***************************************
const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().pattern(emailRegexp),
  phone: Joi.string(),
  favorite: Joi.boolean(),
})

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
})

const schemas = {
  addSchema,
  updateFavoriteSchema,
}
// *****************************************************

const Contact = model("contact", contactShema);

module.exports = {
    Contact,
    schemas,
}