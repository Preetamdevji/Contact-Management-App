const express = require("express");
const { connectDB } = require("./config/db");
require("dotenv").config();

const  app = express();

// route
/** 
 * users
 * auth
 * contact
*/
app.use('/api/v1/users', require('./routes/users'));
app.use('/api/v1/auth', require('./routes/auth'));
app.use('/api/v1/contact', require('./routes/contact'));

// Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, async()=>{
    await connectDB();
    console.log("server is running on this", PORT);
});
