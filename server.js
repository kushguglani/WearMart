const express = require('express');

const port =process.env.PORT || 5050;
var app = express();

app.use(express.static(__dirname+'/public'));
console.log(__dirname+'/public');
app.listen(port,()=>{
    console.log(`Server is up on port ${port}`);
})