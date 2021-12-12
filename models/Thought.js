const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [{}],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false,
  }
);

const ReactionSchema = new Schema(
  {
    reactionId: {
        type: Schema.Types.ObjectId
    },
    reactionBody: {
        type: String,
        required: true,
        maxLength: 280
    },
    username: {
        type: String,
        required: true

    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createAtVal) => dateFormat(createAtVal)
    },
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// get count of friends
ThoughtSchema.virtual('ReactionCount').get(function () {
  return this.reactions.length;
});


const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;
