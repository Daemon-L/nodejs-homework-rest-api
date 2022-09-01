const { User } = require('../../models/model_user');
const { RequestError } = require('../../helpers/index');

const updateSubscription = async (req, res) => {
    const { _id } = req.user;
    const result = await User.findByIdAndUpdate(_id, req.body, { new: true });
    if (!result) {
        throw RequestError(404, 'missing field subscription');
    }
    res.json(result);
};

module.exports = updateSubscription;