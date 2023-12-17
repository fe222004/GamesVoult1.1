import express from "express";
import connectionDB from "./database";


const router = express.Router();


//Obterner
router.get("/", (_req, res) => {
    console.log("Recibe datos");

    connectionDB.query("SELECT * FROM generos", (error: any, results: any) => {
      if (error) {
        throw error;
      }
      res.send(results.rows);
    });
});

//Agregar
router.post("/", (_req, res) => {
    connectionDB.query(
      "INSERT INTO generos(genero) VALUES ($1)",
      [
        _req.body.genero
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