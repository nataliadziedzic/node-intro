const express = require('express')
const path = require('path')
const functions = require('./functions')

const port = process.env.PORT || 3000
const app = express()
app.set('view engine', 'hbs')
app.use('/assets', express.static(path.join(__dirname, './assets')))
app.use('/js', express.static(path.join(__dirname, './js')))

app.get("/", function (req,res){
    res.render("index", {
        title: 'Zajęcia',
        subtitle: functions.subtitle,
    });
})
app.get("/about", function (req,res){
    res.send("Strona o nas");
})

app.listen(port, (err) => {
    if (err) { return console.log(err) }
    console.log("server is running on", port)
})