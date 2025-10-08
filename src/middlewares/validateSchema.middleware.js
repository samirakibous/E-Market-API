const validateSchema =(schema) => async(req, res, next) =>{
    try {
        await schema.validate(req.body, { abortEarly: false });
        next();
    } catch (error) {
        res.status(400).json({
            message: "Validation échouée",
            errors: error.errors
        });
    }
};

module.exports = {validateSchema};