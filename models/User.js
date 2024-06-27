const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      trim: true,
      required: "Username is required",
    },
    email: {
      type: String,
      unique: true,
      required: "Valid email address required",
      match: [/.+@.+\..+/, "Please provide a valid email address"],
    },
    reactions: [
      {
        type: Schema.Types.ObjectId,
        ref: "Reaction",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model("User", UserSchema);

module.exports = User;
