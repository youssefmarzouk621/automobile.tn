require('dotenv').config()

const express = require('express');

const User = require('../Models/User');

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')




const route = express.Router();      


const index = (req,res,next)  => {
	User.find()
	.then(users  => {
		res.json(users)
	})
	.catch(error  =>{
		res.json({
			message: "an error occured when displaying users"
		})
	})
}

//authentification
const register = (req,res,next) => {
	bcrypt.hash(req.body.password,10,function(err,hashedPass) {

		if (err) {
			console.log('erreur password hash');
			res.json({
				error: err
			})
		}
		var verifemail = req.body.email

		User.findOne({$or: [{email:verifemail}]})
		.then(user => {
			if (user) {//user found
				res.status(201).send(JSON.stringify({
					message:'User exist'
				}))
			}else{//no user found
				let user = new User({
					firstName: req.body.firstName,
					lastName: req.body.lastName,
					email: req.body.email,
					password: hashedPass,
					phone: "90057620",
					avatar:"default",
					verified:0,
				})
				user.save().then(user =>{
					res.status(200).send(JSON.stringify({
						message:'User Added Successfully!'
					}))
				})
				.catch(error => {
					res.json({
						message: "An error occured when adding user!"
					})
				})
			}//end else
		})//end then 
	})//end hash
}

const login = (req,res,next) => {
	var email = req.body.email
	var password = req.body.password

	console.log(req.body);

	User.findOne({$or: [{email:email},{phone:email}]})
	.then(user => {
		if (user) {
			bcrypt.compare(password,user.password,function(err,result) {
				if (err) {
					res.json({error:err})
				}
				if (result) {
					const hash = { name: user._id }
					const accessToken = generateAccessToken(hash)

					res.status(200).send(JSON.stringify({ //200 OK
						_id:user._id,
						firstName:user.firstName,
						lastName:user.lastName,
						email:user.email,
						password:user.password,
						phone:user.phone,
						sexe:user.sexe,
						avatar:user.avatar,
						token:accessToken
					}))

				}else{	
					res.status(403).send("invalid credentials"
					)
				}
			})
		}else{
			res.status(403).send("invalid credentials")
		}
	})
}



//display uploads folder
const displayUploads = (req, res) => {
	var uploadFiles=[]
	const testFolder = './public/users/';
	fs.readdir(testFolder, (err, files) => {
	  files.forEach(file => {
	  	uploadFiles.push(file)
	  });
	  res.json(files)
	});
}



function generateAccessToken(hash) {
    return jwt.sign(hash, process.env.ACCESS_TOKEN_SECRET)
}

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.status(401).send(JSON.stringify({msg:"no token in headers"}))
  
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) return res.status(403).send(JSON.stringify({msg:"erreur in token"}))
      req.user = user
      next()
    })
}



route.get('/',index)

//authentification
route.post('/login',login) //email,password
route.post('/register',register)


//uploads
route.get('/displayUploads',displayUploads)


module.exports = route;