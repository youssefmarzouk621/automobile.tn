const express = require('express')
const connectDB = require('./dB/connection.js')
const app = express();



app.use(express.json({ extended: false }));

app.use('/uploads', express.static(__dirname + '/public'));

app.use('/api/users',require('./Controllers/usersController'))
app.use('/api/cars',require('./Controllers/carsController'))
app.use('/api/categories',require('./Controllers/categoryController'))

//connectDB();

mongoose.connect("mongodb://localhost:27017/automobile")
.then(() =>{
  console.log("database connected");
}).catch((err)=>{
  console.log(err)
})

app.listen(process.env.PORT || 5000)
console.log("server started")