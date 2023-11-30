import expresss from 'express'
const cors = require('cors')
const app = expresss()
const PORT = 3000

app.use(cors());
app.use(expresss.json())


import gamesRouter from './routes/games'


//Routes
app.use('/api/games', gamesRouter)


app.get('/ping',(_req,res)=>{
    console.log('siiiiinni')
    res.send('pong')
})

 
app.listen(PORT, () =>{
    console.log('serve running on port 3000')
})



