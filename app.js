const express = require('express')
const app = express()
const path = require('path')
require('./server')
const PORT = 5000;

const methodOverride = require('method-override');
const ejsMate = require('ejs-mate')

app.engine('ejs', ejsMate)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))


app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

const products = require('./routes/routes')

app.use('/products', products)

app.get('/', (req, res) => {
	res.render('home')
})

app.listen(PORT, () => {
	console.log(`Serving on port ${PORT}`)
})