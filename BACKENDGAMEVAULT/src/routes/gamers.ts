import express from "express";
import connectionDB from "./database";

const router = express.Router();


//Obterner
router.get("/", (_req, res) => {
    console.log("Recibe datos");

    connectionDB.query("SELECT * FROM gamers", (error: any, results: any) => {
      if (error) {
        throw error;
      }
      res.send(results.rows);
    });
});

//Agregar
router.post("/", (_req, res) => {
 
  connectionDB.query(
    "insert into gamers(nombre,apellido,usuario,correo,pasword,rol_fk) values ($1,$2,$3,$4,$5,$6)",
    [
      _req.body.nombre,
      _req.body.apellido,
      _req.body.usuario,
      _req.body.correo,
      _req.body.pasword,
      _req.body.rol
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
router.delete("/:idgamers", (_req, res) => {

  const idgames = parseInt(_req.params.idgamers);

  if (isNaN(idgames)) {
    res.status(400).json({ error: 'ID no válido' });
    return;
  }

  connectionDB.query("DELETE FROM gamers WHERE id_gamers=$1", [idgames], (error: any, results: any) => {
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

//Actualizar
router.put("/:id_gamers",(_req, res)=>{

  const id_gamers = parseInt(_req.params.id_gamers);
  if (isNaN(id_gamers)) {
    res.status(400).json({ error: 'ID no válido' });
    return;
  }

  connectionDB.query(
    "UPDATE gamers SET nombre=$1, apellido=$2, usuario=$3, correo=$4, pasword=$5 WHERE id_gamers=$6",
    [    
      _req.body.nombre,
      _req.body.apellido,
      _req.body.usuario,
      _req.body.correo,
      _req.body.pasword,
      id_gamers
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
export default router;
