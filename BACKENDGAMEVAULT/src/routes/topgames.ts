import express from "express";
import connectionDB from "./database";


const router = express.Router();


//obtener

router.get("/", (_req, res) => {
    console.log("encuentra datos");
  
    connectionDB.query(
      "SELECT * FRom games ORDER BY idgames DESC LIMIT 3",
      (error: any, results: any) => {
        if (error) {
          throw error;
        }
        res.send(results.rows);
      }
    );
  });


  
  

export default router;