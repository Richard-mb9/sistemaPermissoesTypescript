import express from 'express'
import db from './db/db'
import cors from 'cors'
import bodyparser from 'body-parser'

import systems from './controllers/systems'
import rules from './controllers/rules'
import login from './controllers/login'

const app = express()

const port = 3000;
const host = "0.0.0.0"


app.use(cors())
app.use(bodyparser.json())
db.connect()

app.use(systems)
app.use(rules)
app.use(login)



app.get('/',(req,res)=>{
    
    return res.send("hello world2")
})

app.listen(port,host);

