const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// ==============================================================
const aboutRouter = require('./routes/about')
const featuresRouter = require('./routes/features')
const panelRouter = require('./routes/panel')
const tutorialsRouter = require('./routes/tutorials')

app.use('/about', aboutRouter)
app.use('/features',featuresRouter)
app.use('/panel', panelRouter)
app.use("/tutorials", tutorialsRouter)