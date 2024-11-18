const mongoose = require('mongoose');

const URI ="mongodb+srv://automobile:ufjCBRRzT5HYqRnL@Cluster0.eq7owjt.mongodb.net/automobile?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  console.log('db connected..!');
};




module.exports = connectDB;