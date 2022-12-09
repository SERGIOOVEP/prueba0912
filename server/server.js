const express = require('express');
const app = express();

app.use(express.json())

//CONECTAMOS A MONGO
const mongoose = require('mongoose');

mongoose
.connect('mongodb://127.0.0.1/ejercicio')
.then(console.log("Conectado a Mongo"))


//TRAMEOS EL MODELO
const Pelicula = require("./models/peliculas.model")


//HACEMOS LA PETICIÓN
app.post('/peliculas', (req, res) => {

    try {
        const { titulo, genero, director } = req.body;
      
        let nuevaPelicula = {
            titulo,
            genero,
            director
        }

        let enviarPelicula = new Pelicula (nuevaPelicula)

        enviarPelicula.save(function(err){
            if (err) throw err;
            console.log("Inserción correcta");
            res.send();
        });
    }
    catch (error) {
        res.status(500)
        res.send(error.message)
    }
});


app.listen(3000, ()=> console.log("Conectado"));