const mongoose = require("mongoose");
const opts = {toJSON: {virtuals: true}}
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
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
}, opts);

WorkoutSchema.virtual("totalDuration").get(function() {
  return this.exercises.reduce((acc, curr) => {
    return acc + curr.duration;
  }, 0);
});


const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
