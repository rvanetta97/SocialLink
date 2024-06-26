const { Schema, model } = require('mongoose');
const { type } = require('os');

const ReactionSchema = new Schema (
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionContent: {
            type: String,
            required: true,
            maxlength: 250,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp),
        }
    },
    {
        toJSON: {
            getters:true,
        }, 
        id:false
    }
);

const ThoughtSchema = new Schema(
    {
        thoughtContent: {
            type: String,
            required: "Posting this thought is no easy task; after all, 'thought' is a required field!"
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp),
        },
        username: {
            type: String,
            required: true
        },
        reactions: [ReactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false,
    }
);

ThoughtSchema.virtual("reactionCount").get(function(){
    return this.reactions.length;
});

const Thought = model("Thought", ThoughtSchema);

module.exports = Thought;