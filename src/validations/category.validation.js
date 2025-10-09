const yup = require("yup");

const categorySchema = yup.object().shape({
    name: yup.string().required("Le nom de la catégorie est requis").min(3,"le titre doit avoir au moins 3 caractères"),
});
module.exports= {categorySchema};