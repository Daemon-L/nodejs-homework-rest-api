const { Contact } = require('../../models/model_contact');

const getAll = async (_, res, next) => {
    const result = await Contact.find({}, "-createdAt -updatedAt");
    res.json({ result });
};

module.exports = getAll;