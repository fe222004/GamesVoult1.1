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
import home from './routes/home'
import recomendados from './routes/recomendados'

import catalogo from './routes/catalogo'
import catalogoacciones from './routes/catalogoacciones';
import homeGamer from './routes/home'
import tendencias from './routes/tendencias'

import tarjetas from './routes/tarjetas'
import top from './routes/topgames'
import comentariosHome from './routes/comentario'




//Routes
app.use('/api/games', gamesRouter);
app.use('/api/gamers', gamersRouter)
app.use('/login', login)
app.use('/api/comentarios',gamersComentarioRouter)
app.use('/api/genero',genero )
app.use('/api/requisitos',requisito )


//Actions
app.use('/api/home', home)
app.use('/api/recomendados', recomendados)

//Actions
app.use('/api/catalogo', catalogo)
app.use('/acciones/', catalogoacciones)
app.use('/home', homeGamer)
app.use('/tendencias/', tendencias)


app.use('/tarjetas', tarjetas),
app.use('/top', top),
app.use('/comentarios', comentariosHome)


app.get('/ping',(_req,res)=>{
  res.send('pong')
})

 
app.listen(PORT, () =>{
    console.log('serve running on port 3000')
})



