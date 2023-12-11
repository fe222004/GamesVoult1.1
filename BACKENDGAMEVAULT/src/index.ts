import expresss from 'express'
const cors = require('cors')
const app = expresss()
const PORT = 3000

app.use(cors());
app.use(expresss.json())


import gamesRouter from './routes/games'
import comentario from './routes/comentario'


//Routes
app.use('/api/games', gamesRouter),
app.use('/comentario', comentario)


app.get('/ping',(_req,res)=>{
    res.send('pong')
})

 
app.listen(PORT, () =>{
    console.log('serve running on port 3000')
})



