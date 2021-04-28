const { Schema, model } = require("mongoose");


const userSchema = new Schema (
    {   
        name: {type: String, required: true},
        username: {type: String, required: true},
        email: {type: String, required: true},
        address: {type: String, required: true},
        phone: {type: String, required: true},
        website: {type: String, required: false},
        company: {type: String, required: false}
      },
      {
        timestamps: true,
        versionKey: false,
    }
    )

    module.exports = model("User", userSchema);