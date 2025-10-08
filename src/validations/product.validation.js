const yup= require("yup");

const productSchema = yup.object().shape({
    title: yup.string().required("le titre est obligatoire").min(3,"le titre doit avoir au moins 3 caractères"),
    price: yup.number().required("le prix est obligatoire").min(0,"le prix doit avoir au moins 0"),
    stocke: yup.number().required("la quantité est obligatoire").min(1,"la quantité doit avoir au moins 1"),
    imageUrl: yup.string().required("l'url de l'image est obligatoire"),
    description: yup.string().required("la description est obligatoire"),
    categoryId: yup.string().required("la categorie est obligatoire"),
});
module.exports= {productSchema};