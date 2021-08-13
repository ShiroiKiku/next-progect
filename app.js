const mysql = require('mysql')
const express = require('express')
const path  = require('path')
const exphbs = require('express-handlebars')
const indexRoutes = require('./routes/index')

const PORT = require('./config')



// шаблонизатор
const app = express()
const hbs = exphbs.create({
    defaultLayout:'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views' )

app.use(express.static(path.join(__dirname, 'public')))

app.use(indexRoutes)

app.listen(PORT, () => {
    console.log("yas")
    console.log(PORT)
})