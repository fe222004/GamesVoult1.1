import expresss from 'express'
const cors = require('cors')
const app = expresss()
const PORT = 3000

app.use(cors());
app.use(expresss.json())


import gamesRouter from './routes/games'
import gamersRouter from './routes/gamers'
import login from './routes/login'
import gamersComentarioRouter from './routes/comentario'
import genero from './routes/genero'
import requisito from './routes/requisitos'

//Actions




//Routes
app.use('/api/games', gamesRouter);
app.use('/api/gamers', gamersRouter)
app.use('/login', login)
app.use('/api/comentarios',gamersComentarioRouter)
app.use('/api/genero',genero )
app.use('/api/requisitos',requisito )


//Actions



app.get('/ping',(_req,res)=>{
  res.send('pong')
})

 
app.listen(PORT, () =>{
    console.log('serve running on port 3000')
})



