import express from 'express'
import connectionDB from "./database";
const app = express()
const cors = require('cors')



app.use(cors());
app.use(express.json())


const router = express.Router()

//obtener
router.get("/", (_req, res) => {
  console.log("Recibe datos");

  connectionDB.query("SELECT games.*, requisitos.minimo, requisitos.maximo, generos.genero AS nombre_genero FROM games LEFT JOIN requisitos ON games.idgames = requisitos.id_game_fk  LEFT JOIN generos ON games.id_genero_fk = generos.id_genero", (error: any, results: any) => {
    if (error) {
      throw error;
    }
    res.send(results.rows);
  });

  //res.send("Fetching all antry diary");
});

//agregar
router.post("/", (_req, res) => {
  console.log("Recibe datos");
  connectionDB.query(
    "insert into games(nombre,descripcion,fechaactualizacion,idioma,peso,version,imagen,archivo,id_genero_fk) values ($1,$2,$3,$4,$5,$6,$7,$8,$9)",
    [
      _req.body.nombre,
      _req.body.descripcion,
      _req.body.fechaactualizacion,
      _req.body.idioma,
      _req.body.peso,
      _req.body.version,
      _req.body.imagen,
      _req.body.archivo,
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

//eliminar
router.delete("/:idgames",(_req, res)=>{

  const idgames = parseInt(_req.params.idgames);

  if (isNaN(idgames)) {
    res.status(400).json({ error: 'ID no válido' });
    return;
  }

  connectionDB.query("DELETE FROM games WHERE idgames=$1", [idgames], (error: any, results: any) => {
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

//editar
router.put("/:idgames",(_req, res)=>{

  const idgames = parseInt(_req.params.idgames);
  if (isNaN(idgames)) {
    res.status(400).json({ error: 'ID no válido' });
    return;
  }

  connectionDB.query(
    "UPDATE games SET nombre=$1, descripcion=$2, fechaactualizacion=$3, idioma=$4, peso=$5, version=$6, imagen=$7, archivo=$8 WHERE idgames=$9",
    [    
      _req.body.nombre,
      _req.body.descripcion,
      _req.body.fechaactualizacion,
      _req.body.idioma,
      _req.body.peso,
      _req.body.version,
      _req.body.imagen,
      _req.body.archivo,
      idgames
    ],
    (error: any, results: any) => {
      if (error) {
        throw error;
      }

      if (results.rowCount > 0) {
        res.json('Actualizado');
      } else {
        res.status(404).json({ error: 'Juego no encontrado' });
      }
    }
  );

});

export default router