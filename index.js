const connectToMongo=require('./db');
const bodyParser = require('body-parser');
const cors=require('cors')
connectToMongo();   
const express = require('express')
const app = express()
const port =process.env.port|| 4000;
app.use(bodyParser.json({ limit: '100mb' }));

app.use(express.json())
app.use(cors());
///avilable routes////////
app.get('/',(req,res)=>{
  res.send("<h1>working fine</h1>")

})

app.use('/api/form',require('./routes/form'));

const server=app.listen(port, () => {
  console.log(`app listening on port ${port}`)
  
})
server.timeout = 60000;