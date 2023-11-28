import { Pool } from "pg";

const connectionDB = new Pool({
  user: "postgres",
  host: "localhost",
  database: "gamesvault",
  password: "1234",
  port: 5432,
});

connectionDB.connect();
export default connectionDB;
