import pool from "../config/db.js";

export const allproducts=async(req,res)=>{
    const query='select * from product';
    try{
        const [data]= await pool.query(query);
        res.json({
            success:true,
            data: data
        })
    }
    catch(err){
        res.json({
            success:false,
            error: err
        })
    }
    
}