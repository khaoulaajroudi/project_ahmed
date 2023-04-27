const mongoose = require("mongoose");
const schema = mongoose.Schema;
const serviceSchema = new schema({
  name: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: "https://i0.wp.com/lapresse.tn/wp-content/uploads/2020/03/voyage.jpg?fit=850%2C491&ssl=1",
  },
 
});
module.exports = mongoose.model("service", serviceSchema);
