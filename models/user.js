const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    userName: { type: String, required: true, trim: true },
    password: {
        type: String,
        trim: true,
        required: true,
        validate: [
            function (input) {
                return input.length >= 6;
            },
            "Password should be longer than 6 characters."
        ]
    },
    email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    userCreated: {
        type: Date,
        default: Date.now
    },
    recipes: [
        {
            type: Schema.Types.ObjectId,
            ref: "Recipe"
        }
    ],
    articles: [
        {
            type: Schema.Types.ObjectId,
            ref: "Article"
        }
    ]
});

const User = mongoose.model("User", userSchema);

module.exports = User;