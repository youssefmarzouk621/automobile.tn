const express = require('express');
const Brand = require('../Models/Brand');

const route = express.Router();

const index = (req,res,next)  => {
	Brand.find()
	.then(brands  => {
		res.json(brands)
	})
	.catch(error  =>{
		res.json({
			message: "an error occured when displaying brands"
		})
	})
}

//add brand
const store = (req,res,next) => {
	let brand = new Brand({
		name: req.body.name,
		image: req.body.image,
	})
	brand.save()
	.then(response => {
		res.json({
			message:"brand Added Successfully"
		})
	})
	.catch(error  => {
		res.json({
			message: "an error occured when adding brand"
		})
	})
}

route.get('/',index)
route.post('/add',store)

module.exports = route;