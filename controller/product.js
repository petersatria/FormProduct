const Product = require('../models/product');

exports.showAll = async (req, res) => {
	const products = await Product.find({})
	res.render('products/index', { products })
}

exports.newPage = (req, res) => {
	res.render('products/new')
}

exports.newProduct = async (req, res) => {
	const product = new Product(req.body.product)
	await product.save()
	res.redirect(`/products/${product._id}`)
}

exports.detailPage = async (req, res) => {
	const product = await Product.findById(req.params.id)
	res.render('products/show', { product })
}

exports.editPage = async (req, res) => {
	const product = await Product.findById(req.params.id)
	res.render('products/edit', { product })
}

exports.editProduct = async (req, res) => {
	const { id } = req.params
	const product = await Product.findByIdAndUpdate(id, { ...req.body.product })
	res.redirect(`/products/${product._id}`)

}

exports.deleteProduct = async (req, res) => {
	const { id } = req.params
	await Product.findByIdAndDelete(id)
	res.redirect('/products')

}