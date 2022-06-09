const mongoose=require("mongoose")
const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: [
      {
        doorNo: { type: String, required: true },
        street: { type: String, required: true },
        city: { type: String, required: true },
        country: { type: String, required: true },
        pinCode: { type: String, required: true },
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const User=mongoose.model(userSchema)
module.exports=User