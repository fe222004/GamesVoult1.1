import express from "express";
import connectionDB from "./database";


const cors = require('cors')
const app = express()

app.use(cors());
app.use(express.json())

const router = express.Router()


//OBTENER 

  router.get("/", (_req, res) => {
    console.log("encuentra datos");

    connectionDB.query("select * from comentarios", (error: any, results: any) => {
      if (error) {
      throw error;
      }
      res.send(results.rows);
    });
  });


  
//registro

  app.post("/", (req, res) => {
    console.log("guarda datos");
    
   connectionDB.query("insert into comentarios(comentario) values ($1)",
     [
      req.body.comentario
    ], 
    (error: any, _results: any) => {
    if (error) {
      throw error;
    }
    res.json('creado');
  });
  });
  
  //eliminar

  router.delete("/:id_comentario", (req: any, res: any) => {

    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      res.status(400).json({ error: 'ID no válido' });
      return;
    }
   
   connectionDB.query("delete from comentarios where id=$1",
     [id],
     (error: any, _results: any) => {
       if (error) {
         throw error;
       }
       if (_results.rowCount > 0) {
        res.json('Eliminado');
      } else {
        res.status(404).json({ error: 'Juego no encontrado' });
      }
     });
     console.log('se elimino con exito')
  });


  //editar
router.put("/:id",(_req, res)=>{

  const id = parseInt(_req.params.id);
  if (isNaN(id)) {
    res.status(400).json({ error: 'ID no válido' });
    return;
  }

  connectionDB.query(
    "UPDATE comentarios SET nombre=$1 WHERE id_comentarios=$2",
    [    
      _req.body.comentario,
      
    ],
    (error: any, results: any) => {
      if (error) {
        throw error;
      }

      if (results.rowCount > 0) {
        res.json('Actualizado');
      } else {
        res.status(404).json({ error: 'Comentario no encontrado' });
      }
    }
  );

});

//obtener comentario
router.get("/:id",(_req, res)=>{

  const id = parseInt(_req.params.id);

  if (isNaN(id)) {
    res.status(400).json({ error: 'ID no válido' });
    return;
  }

  connectionDB.query(" SELECT * FROM comentarios WHERE id_comentarios=$1", [id], (error: any, results: any) => {
    if (error) {
      throw error;
    }

    if (results.rowCount > 0) {
      res.json(results.rows);
    } else {
      res.status(404).json({ error: 'comentario no encontrado' });
    }
  });

});



export default router

  