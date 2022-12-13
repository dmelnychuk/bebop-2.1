const port = 5500;
const express = require('express');
const getLinks = require('./getlinks');
const getPage = require('./page');
const translate = require('./translate');
const cors = require('cors')
const app = express() 
let article = []

app.use(cors())

app.get('/', (req, res) => {
    res.json('This is a server page')
})


getLinks()
.then (ulinks => {
    for (let i = 0; i < 1; i++) {
        getPage(ulinks[i]) // returns article per each URL
        //.then (res => {console.log(`Type of res: ${typeof(res)}`)})
        .then (res =>{translate(res)})// translates article 
        .then (res => {article.push({res})})
        .then (res => {
          app.get('/results', (request, result) => {result.json(article)})
          
        })
        //
        //.then (res => {console.log(res)})// translate each article
    }
})

app.listen(port, () => {console.log(`Server has started on port: ${port}`)})
