const mongoose = require("mongoose");
const connect = () => {
  return mongoose.connect(
    "mongodb+srv://vadivelan1998:vadivelan1234@cluster0.jejpkww.mongodb.net/ecommerce?retryWrites=true&w=majority"
  );
};
module.exports = connect;
