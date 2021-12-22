const express = require('express');
const Car = require('../Models/Car');

const route = express.Router();


const index = (req,res,next)  => {
	try 
	{
	    Car.find().populate('category').populate('brand').exec(function (err, cars) {
	        if (err) {
	            return res.json({
	            message: ('error : ' + err)
	            });
	        }
	        else {
	            res.json(cars);
	        }
	    });
	    

	} catch (err) {
	    console.log(err);
	    res.json({
	        status: 0,
	        message: '500 Internal Server Error',
	        data: {}
	    })

	}
}

//show single product
const show = (req,res,next)  => {
	const id = req.params.id;

	Car.findById(id).populate('category').populate('brand').exec(function (err, car) {
	        if (err) {
	            return res.json({
	            status: 0,
	            message: ('an error occured when displaying single car ' + err)
	            });
	        }
	        else {
	            res.json(car);
	        }
	    });
}

//add car
const store = (req,res,next) => {
	let car = new Car({
		name: req.body.name,
		description: req.body.description,
		image: req.body.image,
		category: req.body.category,
		brand:req.body.brand
	})
	car.save()
	.then(response => {
		res.json({
			message:"Car Added Successfully"
		})
	})
	.catch(error  => {
		res.json({
			message: "an error occured when adding car"
		})
	})
}


route.get('/',index)
route.get("/:id", show)

route.post('/add',store)




module.exports = route;