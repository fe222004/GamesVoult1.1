import express from "express";
import connectionDB from "./database";


const router = express.Router();


//Obterner
router.get("/", (_req, res) => {
    console.log("Recibe datos");

    connectionDB.query("SELECT * FROM requisitos", (error: any, results: any) => {
      if (error) {
        throw error;
      }
      res.send(results.rows);
    });
});

//Agregar
router.post("/", (_req, res) => {
    connectionDB.query(
      "INSERT INTO requisitos(maximo,minimo,id_game_fk) VALUES ($1,$2,$3)",
      [
        _req.body.maximo,
        _req.body.minimo,
        _req.body.games,
      ],
      (error: any, _results: any) => {
        if (error) {
          throw error;
        }
        res.json("creado");
      }
    );
  });

export default router