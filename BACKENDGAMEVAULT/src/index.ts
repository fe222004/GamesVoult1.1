import expresss from 'express'
const cors = require('cors')
const app = expresss()
const PORT = 3000

app.use(cors());
app.use(expresss.json())

//Actions
import gamesDescarga from './routes/tarjetas'
import topgames from './routes/topgames'

//Routes
import gamesRouter from './routes/games'
import comentario from './routes/comentario'


//Actions
app.use('/tarjetas', gamesDescarga),
app.use('/top', topgames)

//Routes
app.use('/api/games', gamesRouter),
app.use('/comentario', comentario)


app.get('/ping',(_req,res)=>{
    res.send('pong')
})

 
app.listen(PORT, () =>{
    console.log('serve running on port 3000')
})



