import mysql from "mysql2/promise"; 

const pool = mysql.createPool({
    host:'localhost',
    user:"root",
    password:"root@123",
    database:'ecom',
    port: 3306
})


export const checkConnection = async () => {
    try {
        const connection = await pool.getConnection();
        console.log("Database connection successful");
        connection.release();
        console.log("Connection released");
    } catch (error) {
        console.log("Database connection failed", error);
        throw error;
    }
}


export default pool;
