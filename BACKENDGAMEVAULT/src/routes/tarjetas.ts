import express from "express";
import connectionDB from "./database";


const router = express.Router();


//obtener

router.get("/", (_req, res) => {
    console.log("encuentra datos");
  
    connectionDB.query(
      "SELECT * FROM games",
      (error: any, results: any) => {
        if (error) {
          throw error;
        }
        res.send(results.rows);
      }
    );
  });

  //obtener jugador
  router.get("/:id_games",(_req, res)=>{

    const id_games = parseInt(_req.params.id_games);
  
    if (isNaN(id_games)) {
      res.status(400).json({ error: 'ID no válido' });
      return;
    }
  
    connectionDB.query(" SELECT * FROM games WHERE id_games=$1", [id_games], (error: any, results: any) => {
      if (error) {
        throw error;
      }
  
      if (results.rowCount > 0) {
        res.json(results.rows[0]);
      } else {
        res.status(404).json({ error: 'Jugador no encontrado' });
      }
    });
  
  });


  
  

export default router;