import { Pool } from "pg";

const connectionDB = new Pool({
  user: "postgres",
  host: "localhost",
  database: "gamesVault",
  password: "1234",
  port: 5432,
});

connectionDB.connect();
export default connectionDB;
