import express from "express";
import connectionDB from "./database";


const router = express.Router();


//obtener
router.get("/", (_req, res) => {
    console.log("Recibe datos");

    connectionDB.query("SELECT g.imagen, g.nombre, r.maximo, r.minimo, g.version_ FROM games g JOIN requisitos r ON g.idgames = r.id_game_fk;", (error: any, results: any) => {
      if (error) {
        throw error;
      }
      res.send(results.rows);
    });
});


export default router;