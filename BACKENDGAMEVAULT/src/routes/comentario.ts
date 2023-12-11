import express from "express";
import connectionDB from "./database";


const cors = require('cors')
const app = express()

app.use(cors());
app.use(express.json())

const router = express.Router()


//OBTENER 

  router.get("/", (_req, res) => {
    console.log("recibe datos");

    connectionDB.query("select * from comentarios", (error: any, results: any) => {
    if (error) {
      throw error;
    }
    res.send(results.rows);
  });
  //res.send("Fetching all antry diary");
  });


  
//registro

  app.post("/", (req, res) => {
    console.log("recibe datos");
    
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

  router.delete("/:id", (req: any, res: any) => {

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
     console.log('se ejecuto con exito')
  });


  //editar
router.put("/:idgames",(_req, res)=>{

  const idgames = parseInt(_req.params.idgames);
  if (isNaN(idgames)) {
    res.status(400).json({ error: 'ID no válido' });
    return;
  }

  connectionDB.query(
    "UPDATE games SET nombre=$1 WHERE idgames=$2",
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
        res.status(404).json({ error: 'Juego no encontrado' });
      }
    }
  );

});



export default router

  