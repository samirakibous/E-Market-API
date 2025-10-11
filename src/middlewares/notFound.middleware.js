const notFound = (req, res, next) => {
    res.status(404).json({
        message: "Route non trouvée",
        path: req.originalUrl
    });
};

module.exports = notFound;