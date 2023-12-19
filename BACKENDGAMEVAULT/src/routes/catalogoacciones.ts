import express from "express";
import connectionDB from "./database";


const router = express.Router();


//obtener
router.get("/", (_req, res) => {
    console.log("Recibe datos");

    connectionDB.query("SELECT g.imagen, g.nombre, r.maximo, r.minimo, g.version_, gn.genero AS nombre_genero FROM games g JOIN requisitos r ON g.idgames = r.id_game_fk JOIN generos gn ON g.id_genero_fk = gn.id_genero WHERE gn.genero = 'Misterio';", (error: any, results: any) => {
      if (error) {
        throw error;
      }
      res.send(results.rows);
    });
});

//obtener
router.get("/aventura", (_req, res) => {
    console.log("Recibe datos");

    connectionDB.query("SELECT g.imagen, g.nombre, r.maximo, r.minimo, g.version_, gn.genero AS nombre_genero FROM games g JOIN requisitos r ON g.idgames = r.id_game_fk JOIN generos gn ON g.id_genero_fk = gn.id_genero WHERE gn.genero = 'Aventura';", (error: any, results: any) => {
      if (error) {
        throw error;
      }
      res.send(results.rows);
    });
});

//obtener
router.get("/romance", (_req, res) => {
    console.log("Recibe datos");

    connectionDB.query("SELECT g.imagen, g.nombre, r.maximo, r.minimo, g.version_, gn.genero AS nombre_genero FROM games g JOIN requisitos r ON g.idgames = r.id_game_fk JOIN generos gn ON g.id_genero_fk = gn.id_genero WHERE gn.genero = 'Romance';", (error: any, results: any) => {
      if (error) {
        throw error;
      }
      res.send(results.rows);
    });
});

export default router;