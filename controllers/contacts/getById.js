const { Contact } = require('../../models/model_contact');
const { RequestError } = require('../../helpers/index');

const getById =  async (req, res, next) => {
    const { id } = req.params;
    // const result = await Contact.findOne({ _id: id }, "-createdAt -updatedAt");
    const result = await Contact.findById(id, "-createdAt -updatedAt");
    if (!result) {
        throw RequestError(404, 'Not found');
    }
    res.json({ result });
};

module.exports = getById;