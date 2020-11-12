const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
    required: true,
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Please provide an exercise type",
      },
      name: {
        type: String,
        trim: true,
        required: "Please provide an exercise name",
      },
      duration: {
        type: Number,
        validate: [
          ({ value }) => value >= 0,
          "You must user a positive number.",
        ],
      },
      weight: {
        type: Number,
        validate: [
          ({ value }) => value >= 0,
          "You must user a positive number.",
        ],
      },
      reps: {
        type: Number,
        validate: [
          ({ value }) => value >= 0,
          "You must user a positive number.",
        ],
      },
      sets: {
        type: Number,
        validate: [
          ({ value }) => value >= 0,
          "You must user a positive number.",
        ],
      },
    },
  ],
});



const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
