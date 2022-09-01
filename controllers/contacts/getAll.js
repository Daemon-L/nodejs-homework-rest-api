const { Contact } = require('../../models/model_contact');

const getAll = async (req, res, next) => {
    const { _id: owner } = req.user;

    const { page = 1, limit = 20 } = req.query;
    const skip = (page - 1) * limit;

    const { favorite = null } = req.query;
    let result;

    if (favorite !== null) {
        result = await Contact
        .find({ owner, favorite}, "-createdAt -updatedAt", { skip, limit: Number(limit)})
        .populate("owner", "email");
    } else {
        result = await Contact
        .find({ owner }, "-createdAt -updatedAt", { skip, limit: Number(limit)})
        .populate("owner", "email");
    }
    
    res.json({ result });
};

module.exports = getAll;