import express from 'express'
import routerLivros from './routes/livrosRouter.js'

const app = express()
app.use(express.json())

const port = 8000

// Montagem do roteador "livros"
app.use('/livros', routerLivros);

// Iniciar o servidor
app.listen(port, () =>{
    console.log(`Escutando na porta ${port}`)
})