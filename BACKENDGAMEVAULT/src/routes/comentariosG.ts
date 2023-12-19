import express from "express";
import connectionDB from "./database";

const router = express.Router();

//OBTENER

router.get("/", (_req, res) => {
  console.log("encuentra datos");

  connectionDB.query(
    "SELECT comentarios.id_comentario,gamers.nombre AS nombre_jugador, comentarios.comentario, games.nombre AS nombre_juego FROM gamers JOIN games_gamers ON gamers.id_gamer = games_gamers.id_gamers_fk JOIN comentarios ON games_gamers.id_games_gamers = comentarios.id_games_gamers_fk  JOIN games ON games_gamers.id_games_fk = games.id_games",
    (error: any, results: any) => {
      if (error) {
        throw error;
      }
      res.send(results.rows);
    }
  );
});

//REGISTRO

router.post("/", (req, res) => {
  console.log("guarda datos");

  connectionDB.query(
    "insert into comentarios(comentario) values ($1)",
    [req.body.comentario],
    (error: any, _results: any) => {
      if (error) {
        throw error;
      }
      res.json("creado");
    }
  );
});

//eliminar

router.delete("/:id_comentario", (_req: any, res: any) => {
  const id_comentario = parseInt(_req.params.id_comentario);

  if (isNaN(id_comentario)) {
    res.status(400).json({ error: "ID no válido" });
    return;
  }

  connectionDB.query(
    "delete from comentarios where id_comentario=$1",
    [id_comentario],
    (error: any, results: any) => {
      if (error) {
        throw error;
      }

      if (results.rowCount > 0) {
        res.json("Eliminado");
      } else {
        res.status(404).json({ error: "Juego no encontrado" });
      }
    }
  );
  console.log("se elimino con exito");
});

//editar
router.put("/:id", (_req, res) => {
  const id = parseInt(_req.params.id);
  if (isNaN(id)) {
    res.status(400).json({ error: "ID no válido" });
    return;
  }

  connectionDB.query(
    "UPDATE comentarios SET nombre=$1 WHERE id_comentarios=$2",
    [_req.body.comentario],
    (error: any, results: any) => {
      if (error) {
        throw error;
      }

      if (results.rowCount > 0) {
        res.json("Actualizado");
      } else {
        res.status(404).json({ error: "Comentario no encontrado" });
      }
    }
  );
});

//obtener comentario
router.get("/:id", (_req, res) => {
  const id = parseInt(_req.params.id);

  if (isNaN(id)) {
    res.status(400).json({ error: "ID no válido" });
    return;
  }

  connectionDB.query(
    " SELECT * FROM comentarios WHERE id_comentarios=$1",
    [id],
    (error: any, results: any) => {
      if (error) {
        throw error;
      }

      if (results.rowCount > 0) {
        res.json(results.rows);
      } else {
        res.status(404).json({ error: "comentario no encontrado" });
      }
    }
  );
});

export default router;
