const { Contact } = require('../../models/model_contact');
const { RequestError } = require('../../helpers/index');

const updateFavorite = async (req, res) => {
    const { id } = req.params;
    const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });
    
    if (!result) {
        throw RequestError(404, 'missing field favorite');
    }
    res.json(result);
};

module.exports = updateFavorite;