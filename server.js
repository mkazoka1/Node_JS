const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;
 app.listen (PORT,()=> {    
    console.log ('wazuuup')
 });
app.get('/', (req,res)=> {
    res.send ('Hello world wazuuup');
});