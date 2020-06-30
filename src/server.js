const express = require("express")
const server = express()

//pegar o banco de dados
//const db = require("./database/db")

//configurar pasta pública
server.use(express.static("public"))

// utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server, 
    noCache: true
})

//configurar caminhos da minha aplicação

//pagina inicial
//req: Requisição
//res: Resposta
server.get("/", (req, res) => {
    return res.render("index.html", { title: "Um título"})
})

server.get("/create-point", (req, res) => {
    
    //req.query: Query Strings da nossa url
    console.log(req.query)

    return res.render("create-point.html")
})

server.get("/search-results", (req, res) => {

    //pegar os dados do banco de dados
    db.all(`SELECT * FROM places`, function(err, rows){
       if (err){
            return console.log(err)
        }
        const total = rows.length

        //console.log("Aqui estão seus registros")
        //console.log(rows)

        // mostrar a pagia html com os dados do banco de dados
        return res.render("search-results.html", { places: rows, total: total})
    })


})

//ligar o servidor

server.listen(3000)