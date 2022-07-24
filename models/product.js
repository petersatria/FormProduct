const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
	name: { type: String, required: true },
	description: { type: String, required: true },
	price: { type: Number, required: true },
	location: { type: String, required: true },
	image: { type: String, required: true },
	store: { type: String, required: true },
	discount: { type: Number }
})

module.exports = mongoose.model('Product', ProductSchema);