const express = require("express")
const server = express()


//configurar pasta pública
server.use(express.static("public"))

//configurar caminhos da minha aplicação

//pagina inicial
//req: Requisição
//res: Resposta
server.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

server.get("/create-point", (req, res) => {
    res.sendFile(__dirname + "/views/create-point.html")
})

server.get("/search-results", (req, res) => {
    res.sendFile(__dirname + "/views/search-results.html")
})

//PAREI NO MINUTO 57:50



//ligar o servidor

server.listen(3000)