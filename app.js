const express = require('express');
const app = express();

app.use( express.static( "public" ) );

app.set("view engine","ejs" )

app.get("/", function(req, res){
    res.render("index")
});

app.get("/sobre", function(req, res){
    res.render("elements")
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Nosso app esta rodando na porta ${PORT}')
})

