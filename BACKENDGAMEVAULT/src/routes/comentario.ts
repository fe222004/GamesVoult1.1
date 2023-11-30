import connectionDB from "./database";
import expresss from 'express'
const cors = require('cors')
const app = expresss()

app.use(cors());
app.use(expresss.json())


//Comentario

  
  app.post("/comentario", (req: any, res: any) => {
    const data = req.body
   //console.log('Recibe datos')
   connectionDB.query("insert into comentarios(comentario) values ($1)",
     [data.comentario], (error: any, _results: any) => {
    if (error) {
      throw error;
    }
    res.json('creado');
  });
  res.send('res');
  });
  
  app.delete("/comentario/:id", (req: any, res: any) => {
    const data = req.body
   //console.log('ingreso a delete');
   connectionDB.query("delete from comentarios where id=$1",
     [data.comentario],
     (error: any, _results: any) => {
       if (error) {
         throw error;
       }
       res.json('eliminado');
     });
     console.log('se ejecuto con exito')
  });





  
  //app.get("/comentario", (_req: any, res: any) => {
    //connectionDB.query("select * from comentarios", (error: any, results: any) => {
    //if (error) {
      //throw error;
    //}
    //res.send(results.rows);
  //});
  //});
  //app.put("/comentario/:id", (req: any, res: any) => {
   //connectionDB.query("update comentarios set mesa= $1",
     //[req.body.comentario,req.params.id],
     //(error: any, results: any) => {
     //  if (error) {
       //  throw error;
       //}
       //res.send(results.rows);
     //});
  //});


  //app.put("/:id",(_req, res)=>{

    //const id = parseInt(_req.params.id);
    //if (isNaN(id)) {
      //res.status(400).json({ error: 'ID no válido' });
      //return;
    //}
  
    //connectionDB.query(
      //"UPDATE games SET comentario=$1, ",
      //[    
        //_req.body.comentario,
        //id
      //],
      //(error: any, results: any) => {
        //if (error) {
          //throw error;
        //}
  
        //if (results.rowCount > 0) {
          //res.json('Actualizado');
        //} else {
         // res.status(404).json({ error: 'Juego no encontrado' });
        //}
      //}
    //);
  
  //});
  