const isConflict = ({ name, code }) => (name === "MangoServerError" && code === 11000);

const hendleSchemaValidationErrors = (error, data, next) => {
    error.status = isConflict(error) ? 409 : 400;
    next();
};

module.exports = hendleSchemaValidationErrors;