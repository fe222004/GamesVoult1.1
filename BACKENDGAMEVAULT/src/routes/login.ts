import express from "express";
import connectionDB from "./database";

const router = express.Router();

router.post("/", (req, res) => {
  const { usuario, pasword } = req.body;

  connectionDB.query(
    "SELECT * FROM gamers WHERE usuario = $1 AND pasword = $2",
    [usuario, pasword],
    (error, results) => {
      if (error) {
        console.error('Error al ejecutar la consulta:', error);
        res.status(500).json({ success: false, message: 'Error interno del servidor' });
        return;
      }

      if (results.rows.length > 0) {
        const usuario = results.rows[0];
        console.log(usuario)
        if (usuario.rol_fk == '1') {
          res.json({ success: true, role: 'administrador' });
        } else if (usuario.rol_fk == '2') {
          res.json({ success: true, role: 'cliente' });
        } else {
          res.json({ success: false, message: 'Rol desconocido.' });
        }
      } else {
        res.json({ success: false, message: 'Credenciales incorrectas.' });
      }
    }
  );
});


  export default router;