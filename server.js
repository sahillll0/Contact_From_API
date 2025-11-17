import dotenv from 'dotenv'
import {app} from "./app.js"
import { connectDB } from "./db/db.js"


dotenv.config({
    path: './.env'
});



connectDB()
     .then(()=>{
        app.listen(process.env.PORT || 8001 , ()=>{
            console.log('server start ');
        })
     })
     .catch((err)=>{
        console.log('connection Error :', err);
        
     })