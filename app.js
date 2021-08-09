const express = require('express')
const exphbs = require('express-handlebars')

const PORT = process.env.PORT || 3000

const app = express()

app.listen(PORT, () => {
    console.log("yas")
})