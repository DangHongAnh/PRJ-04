import mysql2, { PoolOptions, Pool } from "mysql2";

// Tao cac config de ket noi
const databaseConfig: PoolOptions = {
  database: "ecomglass",
  port: 3306,
  user: "root",
  password: "12345678",
   host:"127.0.0.1",
};

//Khoi tao ket noi
const database: Pool = mysql2.createPool(databaseConfig);

// Day database ra ben ngoai de su dung
export default database.promise();
