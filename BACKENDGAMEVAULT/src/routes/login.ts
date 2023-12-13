import express from "express";
import connectionDB from "./database";

const router = express.Router();

router.post("/", (_req, res) => {
 
    connectionDB.query(
      "SELECT * FROM gamers WHERE usuario = $1 AND pasword = $2",
      [
        _req.body.usuario,
        _req.body.pasword,
      ],
      (error: any, results: any) => {
        if (error) {
          throw error;
        }
  
        if (results.rows.length > 0) {
          const usuario = results.rows[0];
          if (usuario.estado) {
            res.json({ success: true });
          } else {
            res.json({ success: false, message: 'El usuario está desactivado.' });
          }
        } else {
          res.json({ success: false, message: 'Credenciales incorrectas.' });
        }
      }
    );

    console.log('llegoDatos')
  });

  export default router;