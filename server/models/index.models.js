const mongoose = require("mongoose");
const uniquieValidator=require("mongoose-unique-validator");

const AnimalSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Pet Name is required"], minlength: [3, "Pet Name must be at least 3 characters long"] , unique:[true, "Name must be unique"]},
    type: { type: String, required: [true, "Pet Type is required"], minlength: [3, "Pet Type must be at least 3 characters long"] },
    desc: { type: String, required: [true, "Pet Description is required"], minlength: [3, "Pet Description must be at least 3 characters long"] },
    skill1: { type: String, required: [false, "Skill1 is optional"] },
    skill2: { type: String, required: [false, "Skill2 is optional"] },
    skill3: { type: String, required: [false, "Skill3 is optional"] }
}, { timestamps: true });

AnimalSchema.plugin(uniquieValidator);

module.exports = mongoose.model("Authors", AnimalSchema);