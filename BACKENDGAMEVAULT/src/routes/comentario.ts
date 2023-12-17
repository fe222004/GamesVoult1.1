import express from "express";
import connectionDB from "./database";


const router = express.Router();

//Obterner
router.get("/", (_req, res) => {
    console.log("Recibe datos");

    connectionDB.query("SELECT comentarios.id_comentario,gamers.nombre AS nombre_jugador, comentarios.comentario, games.nombre AS nombre_juego FROM gamers JOIN juegos_gamers ON gamers.id_gamers = juegos_gamers.id_gamer_fk JOIN comentarios ON juegos_gamers.id_games_gamers = comentarios.id_game_gamer_fk  JOIN games ON juegos_gamers.id_game_fk = games.idgames", (error: any, results: any) => {
      if (error) {
        throw error;
      }
      res.send(results.rows);
    });
});

//eliminar
router.delete("/:id_comentario", (_req, res) => {

  const id_comentario = parseInt(_req.params.id_comentario);

  if (isNaN(id_comentario)) {
    res.status(400).json({ error: 'ID no válido' });
    return;
  }

  connectionDB.query("DELETE FROM comentarios WHERE id_comentario=$1", [id_comentario], (error: any, results: any) => {
    if (error) {
      throw error;
    }

    if (results.rowCount > 0) {
      res.json('Eliminado');
    } else {
      res.status(404).json({ error: 'Juego no encontrado' });
    }
  });
});


export default router;