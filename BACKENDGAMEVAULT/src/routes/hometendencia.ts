import express from "express";
import connectionDB from "./database";


const router = express.Router();


//obtener
router.get("/tendencias", (_req, res) => {
    console.log("Recibe datos");

    connectionDB.query("SELECT nombre, descripcion, imagen, (SELECT COUNT(DISTINCT id_game_fk) from  juegos_gamers where juegos_gamers.id_game_fk = games.idgames) as gamescount from games order by  gamescount DESC LIMIT 3;", (error: any, results: any) => {
      if (error) {
        throw error;
      }
      res.send(results.rows);
    });
});

export default router;