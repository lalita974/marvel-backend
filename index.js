//Import express
const express = require("express");
const app = express();

//Import cors
const cors = require("cors");
app.use(cors());

// Permettre d'activer les variables d'environnement qui se trouvent dans le fichier `.env`
require("dotenv").config();

//Permettre au serveur de recevoir des paramètres de types Body
app.use(express.json());

//Import des fichiers routes
const comicRoutes = require("./routes/comic");
const characterRoutes = require("./routes/character");

//Indication au serveur d'utiliser les routes importées
app.use(comicRoutes);
app.use(characterRoutes);

//Route universelle
app.all("*", (req, res) => {
  res.status(404).json({ message: "This route does not exist" });
});

//Connexion au serveur
app.listen(process.env.PORT, () => {
  console.log("Server started");
});
