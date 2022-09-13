const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.get('/', (req,res)=>{
	res.sendFile(__dirname+'/views/test.html');
});

app.use('/static', express.static(path.join(__dirname,'public')));

app.listen(port, ()=>{
	console.log(`Server running on port ${port}`)
})