const { Contact } = require('../../models/model_contact');
const { RequestError } = require('../../helpers/index');

const updateById = async (req, res) => {
    const { id } = req.params;
    const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });
    if (!result) {
        throw RequestError(404, 'Not found');
    }
    res.json(result);
};

module.exports = updateById;