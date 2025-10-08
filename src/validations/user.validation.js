const yup = require("yup");
//validation pour objet 
const userSchema = yup.object().shape({
    fullname: yup.string().required("le nom est obligatoire").min(3,"le nom doit avoir au moins 3 caractères"),
    email: yup.string().email("email non valide").required("l'email est obligatoire"),
    password: yup.string().required("le mot de passe est obligatoire").min(6,"le mot de passe doit avoir au moins 6 caractères")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
    "Le mot de passe doit contenir une majuscule, une minuscule, un chiffre et un caractère spécial"
  ),
    role: yup.string().oneOf(["user", "admin"], "Role invalide").default("user"),
});

module.exports= {userSchema};